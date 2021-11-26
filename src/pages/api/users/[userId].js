import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentPublicUser from '@/api/helpers/getCurrentPublicUser'
import usersShow from '@/api/controllers/users/show'

export default nc()
  .use(session)
  .use(getCurrentPublicUser)
  .get(usersShow)
