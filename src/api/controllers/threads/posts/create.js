import nc from 'next-connect'

import { Post } from '@/db/models'

const threadPostsCreate = async (req, res) => {
  const { currentThread, currentUser } = res

  const post = await Post.create({
    ...req.body,
    UserId: currentUser.id,
    ThreadId: currentThread.id
  }, {
    include: [
      {
        association: Post.Thread
      }, {
        association: Post.User
      }
    ]
  })

  res.status(200).json({ post })
}

export default nc()
  .use(threadPostsCreate)
