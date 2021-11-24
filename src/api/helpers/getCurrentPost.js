import { Post } from '@/db/models'

const getCurrentPost = async (req, res, next) => {
  const { query: { postId } } = req
  const { currentThread } = res

  const currentPost = await Post.findOne({
    where: {
      id: Number(postId) || 0,
      ThreadId: currentThread.id
    }
  })

  if (!currentPost) return res.status(404).json({ message: 'Post Not Found' })
  res.currentPost = currentPost

  return next()
}

export default getCurrentPost
