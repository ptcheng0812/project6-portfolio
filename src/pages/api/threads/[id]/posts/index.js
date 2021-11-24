import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentThread from '@/api/helpers/getCurrentThread'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'

import threadPostsCreate from '@/api/controllers/threads/posts/create'

export default nc()
  .use(session)
  .use(getCurrentThread)
  .use(getCurrentUserByToken)
  .post(threadPostsCreate)
