import useSWR from 'swr'
import axios from 'axios'
import { useRouter } from 'next/router'

import fetcher from '@/_services/fetcher'
import getFormData from '@/_services/getFormData'

export default function useUser() {
  const router = useRouter()
  const { data, error, mutate } = useSWR('/api/my/profile', fetcher, {
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
      mutate(resp.data)
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
      mutate(resp.data)
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

  const myProfileUpdate = (values) => (new Promise((resolve, reject) => {
    console.log('profileUpdate>>>>>>>>', values)
    axios({
      method: 'PUT',
      url: '/api/my/profile',
      data: getFormData(values, 'user'),
      withCredentials: true
    }).then((resp) => {
      resolve(resp)
      mutate(resp.data)
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
    authLogout,
    myProfileUpdate
  }
}
