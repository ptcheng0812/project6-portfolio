import nc from 'next-connect'
import authenticateUser from '@/api/helpers/authenticateUser'
import session from '@/api/helpers/session'
import passport from '@/api/helpers/passport'

const threadsCreate = async (req, res) => {
  const { currentUser } = res
  const thread = await currentUser.createThread(req.body, {
    fields: ['title', 'category']
  })

  console.log('>>>>>thread', thread)
  res.status(200).json({ thread })
}

export default nc()
  .use(passport)
  .use(session)
  .use(authenticateUser)
  .use(threadsCreate)
