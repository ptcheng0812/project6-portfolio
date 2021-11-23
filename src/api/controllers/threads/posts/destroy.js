import nc from 'next-connect'
import getCurrentPost from '@/api/helpers/getCurrentPost'

const threadPostsDestroy = async (req, res) => {
  const { currentPost } = res

  await currentPost.destroy()

  res.status(204).json()
}

export default nc()
  .use(getCurrentPost)
  .use(threadPostsDestroy)
