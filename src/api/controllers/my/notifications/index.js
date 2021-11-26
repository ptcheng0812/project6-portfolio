import nc from 'next-connect'

import { Notification } from '@/db/models'

const myNotificationsIndex = async (req, res) => {
  const { currentUser } = res
  const notifications = await Notification.findAll({
    where: {
      ReceivedUserId: currentUser.id
    }
  })

  res.status(200).json({ notifications })
}

export default nc()
  .use(myNotificationsIndex)
