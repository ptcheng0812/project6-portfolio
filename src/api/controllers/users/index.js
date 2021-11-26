import nc from 'next-connect'

import { User } from '@/db/models'

const UsersIndex = async (req, res) => {
  const users = await User.findAll()

  res.status(200).json({ users })
}

export default nc()
  .use(UsersIndex)
