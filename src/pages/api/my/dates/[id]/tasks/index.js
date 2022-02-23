import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentDate from '@/api/helpers/getCurrentDate'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'

import dateTaskCreate from '@/api/controllers/my/tasks/create'
import myTasksIndex from '@/api/controllers/my/tasks/index'

export default nc()
  .use(session)
  .use(getCurrentDate)
  .use(getCurrentUserByToken)
  .post(dateTaskCreate)
  .get(myTasksIndex)
