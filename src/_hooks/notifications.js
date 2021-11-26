import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useNotifications() {
  const { data, mutate } = useSWR('/api/my/notifications', fetcher)

  const createNotification = (values, userId) => (new Promise((resolve, reject) => {
    console.log('>>>>>>>values', values)
    console.log('>>>>>>>useId', userId)
    axios({
      method: 'POST',
      url: '/api/notifications',
      data: values,
      withCredentials: true
    }).then((resp) => {
      mutate(resp.data)
      resolve(resp)
    }).catch((err) => {
      reject(err)
    })
  }))

  const destroyNotification = (values) => {
    axios({
      method: 'DELETE',
      url: `/api/my/notifications/${values.id}`,
      withCredentials: true
    }).then((resp) => {
      mutate(resp.data)
    })
  }

  return {
    myNotifications: data?.notifications || [],
    createNotification,
    destroyNotification
  }
}
