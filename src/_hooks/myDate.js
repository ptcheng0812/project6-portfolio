import { useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { useRouter } from 'next/router'
import produce from 'immer'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useDate(dateId) {
  const router = useRouter()
  const { data, error, mutate } = useSWR(`/api/my/dates/${dateId}`, fetcher)
  const [tasksIds, setTasksIds] = useState([])

  const destroyMyDate = () => {
    axios({
      method: 'DELETE',
      url: `/api/my/dates/${dateId}`,
      withCredentials: true
    }).then(() => {
      router.push('/my/dates')
    })
  }

  const createTasks = (values) => (new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `/api/my/dates/${dateId}/tasks`,
      data: values,
      withCredentials: true
    }).then((resp) => {
      resolve()
      mutate(produce(data, (draft) => {
        draft.date.Tasks.push(resp.data.task)
      }))
    }).catch(() => {
      reject()
    })
  }))

  const updateTasks = (values) => (new Promise((resolve, reject) => {
    setTasksIds(produce(tasksIds, (draft) => {
      draft.push(values.id)
    }))
    axios({
      method: 'PUT',
      url: `/api/my/dates/${dateId}/tasks/${values.id}`,
      data: values,
      withCredentials: true
    }).then((resp) => {
      resolve()
      mutate(produce(data, (draft) => {
        const index = draft.date.Tasks.findIndex((task) => task.id === values.id)
        if (index !== -1) draft.date.Tasks[index] = resp.data.task
      }))
    }).catch(() => {
      reject()
    }).finally(() => {
      setTasksIds(produce(tasksIds, (draft) => {
        const index = draft.findIndex((taskId) => taskId === values.id)
        if (index !== -1) draft.splice(index, 1)
      }))
    })
  }))

  const destroyTasks = (values) => (new Promise((resolve, reject) => {
    setTasksIds(produce(tasksIds, (draft) => {
      draft.push(values.id)
    }))
    axios({
      method: 'DELETE',
      url: `/api/my/dates/${dateId}/tasks/${values.id}`
    }).then(() => {
      resolve()
      mutate(produce(data, (draft) => {
        const index = draft.date.Tasks.findIndex((task) => task.id === values.id)
        if (index !== -1) draft.date.Tasks.splice(index, 1)
      }))
    }).catch(() => {
      reject()
    }).finally(() => {
      setTasksIds(produce(tasksIds, (draft) => {
        const index = draft.findIndex((itemId) => itemId === values.id)
        if (index !== -1) draft.splice(index, 1)
      }))
    })
  }))

  return {
    // meta: data?.meta,
    date: data?.date,
    isLoading: !error && !data,
    isError: error,
    tasksIds,
    // errorMessage: error?.response?.data?.message,
    destroyMyDate,
    createTasks,
    updateTasks,
    destroyTasks
  }
}
