import useSWR, { useSWRConfig } from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useMyThreads(page) {
  const { mutate } = useSWRConfig()
  const { data } = useSWR(`/api/my/threads?page=${page}`, fetcher)

  mutate(`/api/my/threads?page=${page}`)

  return {
    meta: data?.meta,
    myThreads: data?.myThreads
  }
}
