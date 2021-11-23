import axios from 'axios'
import { useRouter } from 'next/router'

export default function useAuthLogout() {
  const router = useRouter()

  const authLogout = () => (new Promise((resolve, reject) => {
    axios({
      method: 'DELETE',
      url: '/api/auth/logout',
      withCredentials: true
    }).then((resp) => {
      resolve(resp)
      router.reload('/')
    }).catch((err) => {
      reject(err)
    })
  }))

  return {
    authLogout
  }
}
