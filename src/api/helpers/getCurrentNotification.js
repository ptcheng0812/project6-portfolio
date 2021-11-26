import { Notification } from '@/db/models'

const getCurrentNotification = async (req, res, next) => {
  const { query: { notificationId } } = req

  const currentNotification = await Notification.findOne({
    where: {
      id: Number(notificationId) || 0
    },
    include: Notification.User
  })

  if (!currentNotification) return res.status(404).json({ message: 'Notification Not Found' })
  res.currentNotification = currentNotification

  return next()
}

export default getCurrentNotification
