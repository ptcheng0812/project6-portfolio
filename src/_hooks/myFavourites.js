import useSWR, { useSWRConfig } from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useMyFavourites(page) {
  const { mutate } = useSWRConfig()
  const { data } = useSWR(`/api/my/favourites/my-favourites?page=${page}`, fetcher)

  mutate(`/api/my/favourites/my-favourites?page=${page}`)

  return {
    favourites: data?.favourites
  }
}
