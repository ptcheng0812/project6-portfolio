import { Task } from '@/db/models'

const getCurrentTask = async (req, res, next) => {
  const { query: { taskId } } = req
  const { currentDate } = res

  const currentTask = await Task.findOne({
    where: {
      id: Number(taskId) || 0,
      DateId: currentDate.id
    },
    include: Task.Date
  })

  if (!currentTask) return res.status(404).json({ message: 'Task Not Found' })
  res.currentTask = currentTask

  return next()
}

export default getCurrentTask
