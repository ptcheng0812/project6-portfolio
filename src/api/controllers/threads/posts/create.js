import nc from 'next-connect'
import getCurrentThread from '@/api/helpers/getCurrentThread'

const threadPostsCreate = async (req, res) => {
  const { currentThread } = res

  const post = await currentThread.createPost(req.body, {
    fields: ['content']
  })

  res.status(200).json({ post })
}

export default nc()
  .use(getCurrentThread)
  .use(threadPostsCreate)
