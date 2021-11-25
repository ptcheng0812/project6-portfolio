import { useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { useRouter } from 'next/router'
import produce from 'immer'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useThread(id) {
  const router = useRouter()
  const { data, error, mutate } = useSWR(`/api/threads/${id}`, fetcher)
  const [postsIds, setPostsIds] = useState([])

  const updateThread = (values) => (new Promise((resolve, reject) => {
    axios({
      method: 'PUT',
      url: `/api/threads/${id}`,
      data: values,
      withCredentials: true
    }).then((resp) => {
      resolve()
      mutate(resp.data)
    }).catch(() => {
      reject()
    })
  }))

  const destroyThread = () => {
    axios({
      method: 'DELETE',
      url: `/api/threads/${id}`,
      withCredentials: true
    }).then((resp) => {
      console.log('>>>>>>>resp', resp)
      router.push('/categories')
    })
  }

  const createPost = (values) => (new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `/api/threads/${id}/posts`,
      data: values
    }).then((resp) => {
      resolve()
      mutate(produce(data, (draft) => {
        draft.thread.Posts.push(resp.data.post)
      }))
    }).catch(() => {
      reject()
    })
  }))

  const updatePost = (values) => (new Promise((resolve, reject) => {
    setPostsIds(produce(postsIds, (draft) => {
      draft.push(values.id)
    }))
    axios({
      method: 'PUT',
      url: `/api/threads/${id}/posts/${values.id}`,
      data: values
    }).then((resp) => {
      resolve()
      mutate(produce(data, (draft) => {
        const index = draft.thread.Posts.findIndex((post) => post.id === values.id)
        if (index !== -1) draft.thread.Posts[index] = resp.data.post
      }))
    }).catch(() => {
      reject()
    }).finally(() => {
      setPostsIds(produce(postsIds, (draft) => {
        const index = draft.findIndex((postId) => postId === values.id)
        if (index !== -1) draft.splice(index, 1)
      }))
    })
  }))

  const destroyPost = (values) => (new Promise((resolve, reject) => {
    setPostsIds(produce(postsIds, (draft) => {
      draft.push(values.id)
    }))
    axios({
      method: 'DELETE',
      url: `/api/threads/${id}/posts/${values.id}`
    }).then(() => {
      resolve()
      mutate(produce(data, (draft) => {
        const index = draft.thread.Posts.findIndex((post) => post.id === values.id)
        if (index !== -1) draft.thread.Posts.splice(index, 1)
      }))
    }).catch(() => {
      reject()
    }).finally(() => {
      setPostsIds(produce(postsIds, (draft) => {
        const index = draft.findIndex((itemId) => itemId === values.id)
        if (index !== -1) draft.splice(index, 1)
      }))
    })
  }))

  return {
    // meta: data?.meta,
    thread: data?.thread,
    isLoading: !error && !data,
    isError: error,
    postsIds,
    // errorMessage: error?.response?.data?.message,
    updateThread,
    destroyThread,
    createPost,
    updatePost,
    destroyPost
  }
}
