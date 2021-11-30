import Link from 'next/link'
import CompsLayout from '@/components/layouts/Layout'

import useUser from '@/_hooks/user'
import usePublicUsers from '@/_hooks/publicUsers'
import useNotifications from '@/_hooks/notifications'

export default function PagesMyNotifications() {
  const { currentUser } = useUser()
  const { users } = usePublicUsers()
  const { myNotifications, destroyNotification } = useNotifications()

  console.log('>>>>>>>currentUser', currentUser)
  console.log('>>>>>>>>>>publicUsers', users)
  console.log('>>>>>>>>myNotifications', myNotifications)

  return (
    <CompsLayout>
      <div id="pages-my-notifications" className="text-center">
        <h1>My Notifications</h1>
        {
          myNotifications?.map((notification) => (
            <div key={notification.id} className="card col-sm-1 col-md-4 col-lg-6">
              <div className="card-body">
                <div className="card-title">
                  {users?.find(({ id }) => id === notification.UserId)?.name}
                  <Link href={`/users/${users?.find(({ id }) => id === notification.UserId)?.id}`}>View User Profile</Link>
                </div>
                <div className="card-text">{notification.message}</div>
                <button
                  className="btn btn-danger btn-sm"
                  type="button"
                  onClick={() => {
                    destroyNotification(notification)
                  }}
                >Viewed and Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </CompsLayout>
  )
}
