import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentThread from '@/api/helpers/getCurrentThread'
import getCurrentPost from '@/api/helpers/getCurrentPost'
import threadPostsUpdate from '@/api/controllers/threads/posts/update'
import threadPostsDestroy from '@/api/controllers/threads/posts/destroy'

export default nc()
  .use(session)
  .use(getCurrentThread)
  .use(getCurrentPost)
  .put(threadPostsUpdate)
  .delete(threadPostsDestroy)
