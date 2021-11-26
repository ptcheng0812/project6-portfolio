import nc from 'next-connect'

import session from '@/api/helpers/session'
import UsersIndex from '@/api/controllers/users/index'

export default nc()
  .use(session)
  .get(UsersIndex)
