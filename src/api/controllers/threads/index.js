import nc from 'next-connect'

import { Thread } from '@/db/models'

const { Op } = require('sequelize')

const threadsIndex = async (req, res) => {
  const { query } = req

  console.log(query)

  // const q = query.q || ''
  const { category } = query
  const page = query.page || 1
  const limit = 5
  const offset = (page - 1) * limit
  const sortField = query.sortField || 'createdAt'
  const sortOrder = query.sortOrder || 'DESC'

  const result = await Thread.findAndCountAll({
    where: {
      category: {
        [Op.iLike]: `%${category}%`
      }
    },
    offset,
    limit,
    order: [[sortField, sortOrder]]
  })

  res.status(200).json({
    threads: result.rows,
    meta: { totalPages: Math.floor(result.count / limit), currentPage: page }
  })
}

export default nc()
  .use(threadsIndex)
