import nc from 'next-connect'

import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import getCurrentPost from '@/api/helpers/getCurrentPost'
import favouritesCreate from '@/api/controllers/my/favourites/create'

export default nc()
  .use(getCurrentUserByToken)
  .use(getCurrentPost)
  .post(favouritesCreate)
