import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'

import threadsIndex from '@/api/controllers/threads/index'
import threadsCreate from '@/api/controllers/threads/create'

export default nc()
  // .use(session)
  // .use(getCurrentUserByToken)
  .get(threadsIndex)
  .post(threadsCreate)
