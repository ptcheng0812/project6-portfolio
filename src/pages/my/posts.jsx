import Link from 'next/link'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'

import CompsLayout from '@/components/layouts/Layout'
import CompsModalsPostsUpdate from '@/components/modals/posts/update'
import CompsModalsMyPostsDelete from '@/components/modals/my-posts/delete'

import useUser from '@/_hooks/user'
import useMyPosts from '@/_hooks/myPosts'
import useThread from '@/_hooks/thread'
// import useThreads from '@/_hooks/threads'
import useAllThreads from '@/_hooks/allThreads'

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

export default function PagesMyPosts() {
  // const [openMyPostsUpdate, setOpenMyPostsUpdate] = useState(false)
  // const [openMyPostsDelete, setOpenMyPostsDelete] = useState(false)
  // const [selectedMyPost, setSelectedMyPost] = useState({})
  // const [page, setPage] = useState(1)

  // const { currentUser } = useUser()
  // const { myPosts } = useMyPosts(page)
  // const { threads } = useAllThreads()
  // const threadsIds = threads?.map((thread) => thread.id)
  // const { updatePost, destroyPost } = useThread(selectedMyPost.ThreadId)

  // console.log('>>>>>>>currentUser', currentUser)
  // console.log('>>>>>>>myPosts', myPosts)
  // console.log('>>>>>>selectedMyPost', selectedMyPost)
  // console.log('>>>>>>>All the threads', threads)
  // console.log('>>>>>>>>threadsIds', threadsIds)
  // console.log('>>>>>>page', page)

  return (
    <CompsLayout>
    </CompsLayout>
  )
}
