import nc from 'next-connect'

import { Post } from '@/db/models'

const myPostsIndex = async (req, res) => {
  const { currentUser } = res

  const myPosts = await Post.findAll({
    where: {
      UserId: currentUser.id
    }
  })

  res.status(200).json({ myPosts })
}

export default nc()
  .use(myPostsIndex)
