import nc from 'next-connect'
import authenticateUser from '@/api/helpers/authenticateUser'
import session from '@/api/helpers/session'

const threadsCreate = async (req, res) => {
  const { currentUser } = res
  const thread = await currentUser.createThread(req.body, {
    fields: ['title', 'category']
  })

  res.status(200).json({ thread })
}

export default nc()
  .use(session)
  .use(authenticateUser)
  .use(threadsCreate)
