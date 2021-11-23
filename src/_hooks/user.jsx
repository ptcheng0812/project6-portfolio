import useSWR from 'swr'
import axios from 'axios'
import { useRouter } from 'next/router'

import fetcher from '@/_services/fetcher'

export default function useUser() {
  const router = useRouter()
  const { data, error } = useSWR('/api/my/profile', fetcher, {
    shouldRetryOnError: false
  })

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
    currentUser: data?.currentUser || null,
    isLoading: !error && !data,
    isError: error,
    errorMessage: error?.response?.data?.message,
    authSignUp,
    authLogin,
    authLogout
  }
}
