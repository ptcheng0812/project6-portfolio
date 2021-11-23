import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useThreads() {
  const { data, mutate } = useSWR('/api/threads', fetcher)

  const createThread = (values) => (new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/api/threads',
      data: values,
      withCredentials: true
    }).then((resp) => {
      resolve(resp)
      mutate(resp.data)
    }).catch((err) => {
      reject(err)
    })
  }))

  return {
    // meta: data?.meta,
    threads: data?.threads || [],
    // isLoading: !error && !data,
    // isError: error,
    // errorMessage: error?.response?.data?.message,
    createThread
  }
}
