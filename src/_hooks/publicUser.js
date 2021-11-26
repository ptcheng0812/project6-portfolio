import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function usePublicUser(id) {
  const { data } = useSWR(`/api/users/${id}`, fetcher)

  return {
    user: data?.user
  }
}
