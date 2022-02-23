import useSWR, { useSWRConfig } from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useTasks(dateId) {
  const { mutate } = useSWRConfig()
  const { data } = useSWR(`/api/my/dates/${dateId}/tasks`, fetcher)

  mutate(`/api/my/dates/${dateId}/tasks`)

  return {
    meta: data?.meta,
    tasks: data?.tasks
  }
}
