import { useState } from 'react'
import useUser from '@/_hooks/user'

import CompsLayout from '@/components/layouts/Layout'
import CompsModalsMyProfileUpdate from '@/components/modals/my-profile/update'

function PagesMyProfile() {
  const { currentUser, myProfileUpdate } = useUser()
  const [openMyProfileEdit, setOpenMyProfileEdit] = useState(false)

  if (!currentUser) return null

  return (
    <CompsLayout>
      <div id="pages-private">
        <h1>Private Page</h1>
        <h2>{currentUser?.email}</h2>
        <h2>{currentUser?.name}</h2>
        <h2>{currentUser?.firstName}</h2>
        <h2>{currentUser?.lastName}</h2>
        <h2>{currentUser?.dateOfBirth}</h2>
        <h2>{currentUser?.introduction}</h2>
        <img src={currentUser?.avatar} alt="avatar" />
        <button
          className="btn btn-info btn-sm"
          type="button"
          onClick={() => {
            setOpenMyProfileEdit(true)
          }}
        >Edit Your Profile</button>
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
