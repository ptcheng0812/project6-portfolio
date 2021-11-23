import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentThread from '@/api/helpers/getCurrentThread'

import threadsShow from '@/api/controllers/threads/show'
import threadsUpdate from '@/api/controllers/threads/update'
import threadsDestroy from '@/api/controllers/threads/destroy'

export default nc()
  .use(session)
  .use(getCurrentThread)
  .get(threadsShow)
  .put(threadsUpdate)
  .delete(threadsDestroy)
