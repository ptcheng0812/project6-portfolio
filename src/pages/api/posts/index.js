import nc from 'next-connect'

import session from '@/api/helpers/session'
import postsIndex from '@/api/controllers/threads/posts/index'

export default nc()
  .use(session)
  .get(postsIndex)
