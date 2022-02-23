import { Date } from '@/db/models'

const getCurrentDate = async (req, res, next) => {
  const { query: { id } } = req

  const currentDate = await Date.findOne({
    where: {
      id: Number(id) || 0
    },
    include: Date.Tasks
  })

  if (!currentDate) return res.status(404).json({ message: 'Date Not Found' })
  res.currentDate = currentDate

  return next()
}

export default getCurrentDate
