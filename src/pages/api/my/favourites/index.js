import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
// import getCurrentPost from '@/api/helpers/getCurrentPost'
import myFavouriteIndex from '@/api/controllers/my/favourites/index'
import favouritesCreate from '@/api/controllers/my/favourites/create'

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  // .use(getCurrentPost)
  .get(myFavouriteIndex)
  .post(favouritesCreate)
