import { Thread } from '@/db/models'

const getCurrentThread = async (req, res, next) => {
  const { query: { id } } = req

  const currentThread = await Thread.findOne({
    where: {
      id: Number(id) || 0
    },
    include: Thread.Posts
  })

  if (!currentThread) return res.status(404).json({ message: 'Thread Not Found' })
  res.currentThread = currentThread

  return next()
}

export default getCurrentThread
