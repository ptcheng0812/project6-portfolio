import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useMyDates() {
  const { data, error, mutate } = useSWR('/api/my/dates', fetcher)

  const createMyDate = (values) => (new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/api/my/dates',
      data: values,
      withCredentials: true
    }).then((resp) => {
      console.log('then', values)
      resolve(resp)
      mutate(resp.data)
    }).catch((err) => {
      reject(err)
    })
  }))

  return {
    meta: data?.meta,
    dates: data?.dates || [],
    isLoading: !error && !data,
    isError: error,
    // errorMessage: error?.response?.data?.message,
    createMyDate
  }
}
