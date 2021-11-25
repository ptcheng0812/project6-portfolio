import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentFavourite from '@/api/helpers/getCurrentFavourite'
import favouritesDestroy from '@/api/controllers/my/favourites/destroy'

export default nc()
  .use(session)
  .use(getCurrentFavourite)
  .delete(favouritesDestroy)
