import useSWR from 'swr'

import fetcher from '@/_services/fetcher'

export default function useUser() {
  const { data, error } = useSWR('/api/my/profile', fetcher)

  return {
    currentUser: data?.currentUser || null,
    isLoading: !error && !data,
    isError: error,
    errorMessage: error?.response?.data?.message
  }
}
