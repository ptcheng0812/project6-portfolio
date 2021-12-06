import useSWR, { useSWRConfig } from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useMyPosts(page) {
  const { mutate } = useSWRConfig()
  const { data } = useSWR(`/api/my/posts?page=${page}`, fetcher)

  mutate(`/api/my/posts?page=${page}`)

  return {
    // meta: data?.meta,
    myPosts: data?.myPosts
  }
}
