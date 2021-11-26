import nc from 'next-connect'

import { Notification } from '@/db/models'

const notificationsCreate = async (req, res) => {
  const { currentUser } = res

  const notification = await Notification.create({
    ...req.body,
    ReceivedUserId: Number(req.body.userId) || 0,
    UserId: currentUser.id
  }, {
    fields: ['message', 'ReceivedUserId', 'UserId']
  })

  res.status(200).json({ notification })
}

export default nc()
  .use(notificationsCreate)
