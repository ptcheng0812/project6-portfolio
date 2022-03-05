import Link from 'next/link'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

import { useState } from 'react'
import { useRouter } from 'next/router'

import CompsLayout from '@/components/layouts/Layout'
import CompsModalsNotificationsCreate from '@/components/modals/notifications/create'
import usePublicUser from '@/_hooks/publicUser'
import useNotifications from '@/_hooks/notifications'



function PagesPublicUser() {
  // const [openNotificationsCreate, setOpenNotificationsCreate] = useState(false)
  // const { query: { userId } } = useRouter()

  // const { user } = usePublicUser(userId)
  // const { createNotification } = useNotifications()

  // console.log('user>>>>>>>>>>>', user)

  return (
    <CompsLayout>

    </CompsLayout>
  )
}

export default PagesPublicUser
