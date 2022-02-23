import nc from 'next-connect'

import { Date } from '@/db/models'

const myDatesIndex = async (req, res) => {
  const { currentUser } = res

  const dates = await Date.findAll({
    where: {
      UserId: currentUser.id
    },
    include: Date.Tasks
  })

  res.status(200).json({
    dates
  })
}

export default nc()
  .use(myDatesIndex)
