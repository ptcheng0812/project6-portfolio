import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function usePosts() {
  const { data } = useSWR('/api/posts', fetcher)

  return {
    // meta: data?.meta,
    posts: data?.posts || []
  }
}
