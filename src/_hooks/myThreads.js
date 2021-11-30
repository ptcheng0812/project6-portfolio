import useSWR, { useSWRConfig } from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useMyThreads() {
  const { mutate } = useSWRConfig()
  const { data } = useSWR('/api/my/threads', fetcher)

  mutate('/api/my/threads')

  return {
    // meta: data?.meta,
    myThreads: data?.myThreads
  }
}
