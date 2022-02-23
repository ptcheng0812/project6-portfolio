import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentDate from '@/api/helpers/getCurrentDate'
import getCurrentTask from '@/api/helpers/getCurrentTask'
import dateTasksUpdate from '@/api/controllers/my/tasks/update'
import dateTasksDestroy from '@/api/controllers/my/tasks/destroy'

export default nc()
  .use(session)
  .use(getCurrentDate)
  .use(getCurrentTask)
  .put(dateTasksUpdate)
  .delete(dateTasksDestroy)
