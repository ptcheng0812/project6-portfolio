import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'

import myDatesIndex from '@/api/controllers/my/dates/index'
import myDatesCreate from '@/api/controllers/my/dates/create'

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .get(myDatesIndex)
  .post(myDatesCreate)
