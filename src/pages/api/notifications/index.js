import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import notificationsCreate from '@/api/controllers/notifications/create'

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .post(notificationsCreate)
