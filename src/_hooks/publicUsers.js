import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function usePublicUsers() {
  const { data } = useSWR('/api/users', fetcher)

  return {
    users: data?.users || []
  }
}
