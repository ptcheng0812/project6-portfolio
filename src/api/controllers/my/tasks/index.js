import nc from 'next-connect'

import { Task } from '@/db/models'

const myTasksIndex = async (req, res) => {
  // const { currentDate } = res

  const tasks = await Task.findAll()

  res.status(200).json({ tasks })
}

export default nc()
  .use(myTasksIndex)
