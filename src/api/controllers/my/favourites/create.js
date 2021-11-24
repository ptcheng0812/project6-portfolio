import nc from 'next-connect'

import { Post } from '@/db/models'

const favouritesCreate = async (req, res) => {
  const { currentPost, currentUser } = res

  const favourite = currentPost.create({
    UserId: currentUser.id,
    PostId: currentPost.id
  }, {
    include: Post.Favourites
  })

  res.status(200).json({ favourite })
}

export default nc()
  .use(favouritesCreate)
