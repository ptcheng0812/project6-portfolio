import nc from 'next-connect'

import session from '@/api/helpers/session'
import allThreadsIndex from '@/api/controllers/my/posts/threads/index'

export default nc()
  .use(session)
  .get(allThreadsIndex)
