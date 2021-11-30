import nc from 'next-connect'

import { Post } from '@/db/models'

const postsIndex = async (req, res) => {
  const posts = await Post.findAll()

  res.status(200).json({ posts })
}

export default nc()
  .use(postsIndex)
