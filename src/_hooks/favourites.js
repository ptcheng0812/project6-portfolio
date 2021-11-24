import axios from 'axios'

export default function useFavourites() {
  const createFavourite = (values) => (new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/api/my/favourites',
      data: values
    }).then((resp) => {
      resolve(resp)
    }).catch(() => {
      reject()
    })
  }))

  return {
    createFavourite
  }
}
