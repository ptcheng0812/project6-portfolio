import Link from 'next/link'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { useState } from 'react'
import useUser from '@/_hooks/user'

import CompsLayout from '@/components/layouts/Layout'
import CompsModalsMyProfileUpdate from '@/components/modals/my-profile/update'

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 2
    }}
    className="coloured-line"

  />
)

function PagesMyProfile() {
  const { currentUser, myProfileUpdate } = useUser()
  const [openMyProfileEdit, setOpenMyProfileEdit] = useState(false)

  if (!currentUser) return null

  return (
    <CompsLayout>
      <div id="pages-private" className="d-flex flex-column">
        <h1>Private Page</h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} id="page-my-profile-main-grid">
          <Grid item xs={4} id="pages-my-profile-avatar-grid" className="d-flex justify-content-center border rounded">
            <Avatar src={currentUser?.avatar} alt="avatar" sx={{ width: 200, height: 200 }} id="pages-my-profile-avatar" />
          </Grid>
          <Grid item xs={6} id="pages-my-profile-info-grid">
            <h6>Email: {currentUser?.email}</h6>
            <ColoredLine color="black" />
            <h6>Name: {currentUser?.name}</h6>
            <h6>Full Name: {currentUser?.firstName} {currentUser?.lastName}</h6>
            <h6>Date of Birth: {currentUser?.dateOfBirth}</h6>
            <ColoredLine color="black" />
            <Typography variant="subtitle2" gutterBottom component="div">
              Introduction:
            </Typography>
            <h6>{currentUser?.introduction}</h6>
            <Button
              className="btn btn-info btn-sm"
              id="edit-profile-btn"
              type="button"
              onClick={() => {
                setOpenMyProfileEdit(true)
              }}
            ><i className="fas fa-edit" />  Edit Your Profile</Button>
          </Grid>
          <Grid item xs={4} spacing={2} className="in-pages-nav border rounded">
            <CardContent className="d-flex flex-column">
              <Link href="/my/profile">Profile</Link>
              <Link href="/my/threads">My Threads</Link>
              <Link href="/my/posts">My Posts</Link>
              <Link href="/my/notifications">My Notifications</Link>
              <Link href="/my/favourites">My Favourites</Link>
            </CardContent>
          </Grid>
          <Grid item xs={6} />
        </Grid>
      </div>

      <CompsModalsMyProfileUpdate
        show={openMyProfileEdit}
        initialValues={currentUser}
        handleClose={() => setOpenMyProfileEdit(false)}
        handleSubmit={(values) => {
          console.log('>>>>>>>>values', values)
          myProfileUpdate(values).then(() => {
            setOpenMyProfileEdit(false)
          })
        }}
      />

    </CompsLayout>
  )
}

export default PagesMyProfile
