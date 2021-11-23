import nc from 'next-connect'

import { Thread } from '@/db/models'

const threadsIndex = async (req, res) => {
  const threads = await Thread.findAll()

  res.status(200).json({ threads })
}

export default nc()
  .use(threadsIndex)
