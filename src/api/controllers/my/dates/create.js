import nc from 'next-connect'

import { Date } from '@/db/models'
import { session } from 'passport'
import authenticateUser from '@/api/helpers/authenticateUser'

const myDatesCreate = async (req, res) => {
  const { currentUser } = res

  const date = await Date.create({
    ...req.body,
    UserId: currentUser.id
  }, {
    include: Date.Tasks
  })

  res.status(200).json({ date })
}

export default nc()
  // .use(session)
  // .use(authenticateUser)
  .use(myDatesCreate)
