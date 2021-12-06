import nc from 'next-connect'

import { Thread } from '@/db/models'

const myThreadsIndex = async (req, res) => {
  const { query } = req
  const { currentUser } = res

  const page = query.page || 1
  const limit = 5
  const offset = (page - 1) * limit
  const sortField = query.sortField || 'createdAt'
  const sortOrder = query.sortOrder || 'DESC'

  const result = await Thread.findAndCountAll({
    where: {
      UserId: currentUser.id
    },
    offset,
    limit,
    order: [[sortField, sortOrder]]
  })

  res.status(200).json({
    myThreads: result.rows,
    meta: { totalPages: Math.floor(result.count / limit), currentPage: page }
  })
}

export default nc()
  .use(myThreadsIndex)
