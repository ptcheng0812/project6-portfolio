import useSWR, { useSWRConfig } from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useAllThreads() {
  const { mutate } = useSWRConfig()
  const { data } = useSWR('/api/my/allThreads', fetcher)

  mutate('/api/my/allThreads')

  return {
    meta: data?.meta,
    threads: data?.threads
  }
}
