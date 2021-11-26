import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import myNotificationsIndex from '@/api/controllers/my/notifications/index'

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .get(myNotificationsIndex)
