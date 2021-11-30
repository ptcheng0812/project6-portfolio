import nc from 'next-connect'
// import multer from 'multer'

import session from '@/api/helpers/session'
import getCurrentUserByToken from '@/api/helpers/getCurrentUserByToken'
import authenticateUser from '@/api/helpers/authenticateUser'
import MulterParser from '@/_services/MulterParser'

const myProfileUpdate = async (req, res) => {
  const { currentUser } = res

  console.log('>>>>>>>>>>>body', req.body)
  const newInfo = { ...req.body.user }

  console.log('>>>>>>>>>>file', req?.file)
  if (req?.file && req?.file?.location) {
    newInfo.avatar = req?.file?.location
  }

  await currentUser.update(newInfo, {
    fields: ['name', 'firstName', 'lastName', 'dateOfBirth', 'introduction', 'avatar']
  })

  await currentUser.reload()

  res.status(200).json({ currentUser })
}

export default nc()
  .use(session)
  .use(getCurrentUserByToken)
  .use(authenticateUser)
  .use(MulterParser.single('user[avatar]'))
  .use(myProfileUpdate)
