import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import myThreadsIndex from '@/api/controllers/my/threads/index'

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .get(myThreadsIndex)
