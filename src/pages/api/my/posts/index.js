import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import myPostsIndex from '@/api/controllers/my/posts/index'

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .get(myPostsIndex)
