import axios from 'axios'

export default function useAuthLogin() {
  const authLogin = (values) => (new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/api/auth/email/login',
      data: values,
      withCredentials: true
    }).then((resp) => {
      resolve(resp)
    }).catch((err) => {
      reject(err)
    })
  }))

  return {
    authLogin
  }
}
