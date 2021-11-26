import { User } from '@/db/models'

const getCurrentPublicUser = async (req, res, next) => {
  const { query: { userId } } = req

  const currentPublicUser = await User.findOne({
    where: {
      id: Number(userId) || 0
    },
    include: User.Posts
  })

  if (!currentPublicUser) return res.status(404).json({ message: 'User Not Found' })
  res.currentPublicUser = currentPublicUser

  return next()
}

export default getCurrentPublicUser
