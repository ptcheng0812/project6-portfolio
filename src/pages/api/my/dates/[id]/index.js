import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentDate from '@/api/helpers/getCurrentDate'

import myDatesShow from "@/api/controllers/my/dates/show"
import myDatesDestroy from '@/api/controllers/my/dates/destroy'

export default nc()
  .use(session)
  .use(getCurrentDate)
  .get(myDatesShow)
  .delete(myDatesDestroy)
