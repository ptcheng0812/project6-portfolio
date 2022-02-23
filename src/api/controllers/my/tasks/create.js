import nc from 'next-connect'

import { Task } from '@/db/models'

const dateTaskCreate = async (req, res) => {
  const { currentDate, currentUser } = res

  const task = await Task.create({
    ...req.body,
    UserId: currentUser.id,
    DateId: currentDate.id
  }, {
    include: Task.Date
  })

  res.status(200).json({ task })
}

export default nc()
  .use(dateTaskCreate)
