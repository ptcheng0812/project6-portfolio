import { useState } from 'react'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'

import CompsLayout from '@/components/layouts/Layout'
import CompsModalsThreadsUpdate from '@/components/modals/threads/update'
import CompsModalsMyThreadsDelete from '@/components/modals/my-threads/delete'

import useUser from '@/_hooks/user'
import useMyThreads from '@/_hooks/myThreads'
import useThread from '@/_hooks/thread'

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 2
    }}
    id="pages-my-threads-coloured-line"
  />
)

export default function PagesMyThreads() {
  // const [openMyThreadsUpdate, setOpenMyThreadsUpdate] = useState(false)
  // const [selectedMyThread, setSelectedMyThread] = useState({})
  // const [openMyThreadsDelete, setOpenMyThreadsDelete] = useState(false)
  // const [page, setPage] = useState(1)

  // const { currentUser } = useUser()
  // const { myThreads } = useMyThreads(page)
  // const { updateThread, destroyThread } = useThread(selectedMyThread.id)

  // console.log('>>>>>>>currentUser', currentUser)
  // console.log('>>>>>>>myThreads', myThreads)
  // console.log('>>>>>>>selectedMyThread', selectedMyThread)
  // console.log('>>>>>>page', page)

  return (
    <CompsLayout>

    </CompsLayout>
  )
}
