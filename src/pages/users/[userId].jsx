import { useState } from 'react'
import { useRouter } from 'next/router'

import CompsLayout from '@/components/layouts/Layout'
import CompsModalsNotificationsCreate from '@/components/modals/notifications/create'
import usePublicUser from '@/_hooks/publicUser'
import useNotifications from '@/_hooks/notifications'

function PagesPublicUser() {
  const [openNotificationsCreate, setOpenNotificationsCreate] = useState(false)
  const { query: { userId } } = useRouter()

  const { user } = usePublicUser(userId)
  const { createNotification } = useNotifications()

  console.log('user>>>>>>>>>>>', user)

  return (
    <CompsLayout>
      <div id="pages-public-user">
        <h1>User Page</h1>
        <div id="public-user-info">
          <h4>{user?.name}</h4>
          <h4>{user?.email}</h4>
          <h4>{user?.firstName} {user?.lastName}</h4>
          <h4>{user?.dateOfBirth}</h4>
          <h4>{user?.introduction}</h4>
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={() => {
              setOpenNotificationsCreate(true)
            }}
          >Message</button>
        </div>
      </div>

      <CompsModalsNotificationsCreate
        show={openNotificationsCreate}
        handleClose={() => setOpenNotificationsCreate(false)}
        initialValues={{
          message: '',
          userId
        }}
        handleSubmit={(values) => {
          createNotification(values, userId).then(() => {
            setOpenNotificationsCreate(false)
          })
        }}
      />
    </CompsLayout>
  )
}

export default PagesPublicUser
