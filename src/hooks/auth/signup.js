import axios from 'axios'

export default function useAuthSignUp() {
  const authSignUp = (values) => (new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/api/auth/email/signup',
      data: values,
      withCredentials: true
    }).then((resp) => {
      resolve(resp)
    }).catch((err) => {
      reject(err)
    })
  }))

  return {
    authSignUp
  }
}
