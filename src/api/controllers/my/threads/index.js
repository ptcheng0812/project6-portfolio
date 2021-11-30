import nc from 'next-connect'

import { Thread } from '@/db/models'

const myThreadsIndex = async (req, res) => {
  const { currentUser } = res

  const myThreads = await Thread.findAll({
    where: {
      UserId: currentUser.id
    }
  })

  res.status(200).json({ myThreads })
}

export default nc()
  .use(myThreadsIndex)
