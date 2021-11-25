import nc from 'next-connect'

import { Post, Favourite } from '@/db/models'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
// import getCurrentPost from '@/api/helpers/getCurrentPost'

const favouritesCreate = async (req, res) => {
  const { currentUser } = res

  console.log('req.body>>>>>>>>>', req.body)
  console.log('currentUser>>>>>>>', currentUser)

  const favourite = await Favourite.create({
    UserId: currentUser.id,
    PostId: req.body.id
  }, {
    include: Post.Favourites
  })

  res.status(200).json({ favourite })
}

export default nc()
  .use(getCurrentUserByToken)
  // .use(getCurrentPost)
  .use(favouritesCreate)
