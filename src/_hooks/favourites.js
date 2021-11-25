import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function useFavourites() {
  const { data, mutate } = useSWR('/api/my/favourites', fetcher)

  const createFavourite = (values) => (new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/api/my/favourites',
      data: values,
      withCredentials: true
    }).then((resp) => {
      resolve(resp)
      mutate(resp.data)
    }).catch((err) => {
      reject(err)
    })
  }))

  const destroyFavourite = (values) => (new Promise((resolve, reject) => {
    console.log('values>>>>>>destroy>>>>>>', values)
    axios({
      method: 'DELETE',
      url: `/api/my/favourites/${values.id}`,
      withCredentials: true
    }).then((resp) => {
      resolve(resp)
      mutate(resp.data)
    }).catch(() => {
      reject()
    })
  }))

  return {
    favourites: data?.favourites,
    createFavourite,
    destroyFavourite
  }
}
