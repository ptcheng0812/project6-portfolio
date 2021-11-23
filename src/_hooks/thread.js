import useSWR from 'swr'
import axios from 'axios'
import { useRouter } from 'next/router'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useThread(id) {
  const router = useRouter()
  const { data, error, mutate } = useSWR(`/api/threads/${id}`, fetcher)

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
    }).then(() => {
      router.push('/categories')
    })
  }

  return {
    // meta: data?.meta,
    thread: data?.thread,
    isLoading: !error && !data,
    isError: error,
    // errorMessage: error?.response?.data?.message,
    updateThread,
    destroyThread
  }
}
