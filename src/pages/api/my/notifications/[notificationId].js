import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentNotification from '@/api/helpers/getCurrentNotification'
import notificationsDestroy from '@/api/controllers/my/notifications/destroy'

export default nc()
  .use(session)
  .use(getCurrentNotification)
  .delete(notificationsDestroy)
