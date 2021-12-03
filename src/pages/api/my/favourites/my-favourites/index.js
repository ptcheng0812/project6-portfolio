import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import myFavouritePageIndex from '@/api/controllers/my/favourites/my-favourites/index'

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .get(myFavouritePageIndex)
