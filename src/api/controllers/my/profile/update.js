import nc from 'next-connect'

import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import authenticateUser from '@/api/helpers/authenticateUser'

const myProfileUpdate = async (req, res) => {
  const { currentUser } = res

  await currentUser.update(req.body, {
    fields: ['name', 'firstName', 'lastName', 'dateOfBirth', 'introduction', 'avatar']
  })
  await currentUser.reload()

  res.status(200).json({ currentUser })
}

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .use(authenticateUser)
  .use(myProfileUpdate)
