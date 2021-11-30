import useSWR, { useSWRConfig } from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useMyPosts() {
  const { mutate } = useSWRConfig()
  const { data } = useSWR('/api/my/posts', fetcher)

  mutate('/api/my/posts')

  return {
    // meta: data?.meta,
    myPosts: data?.myPosts
  }
}
