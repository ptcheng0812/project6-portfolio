import nc from 'next-connect'

import { Favourite } from '@/db/models'

const myFavouritePageIndex = async (req, res) => {
  const { query } = req
  const { currentUser } = res

  const page = query.page || 1
  const limit = 5
  const offset = (page - 1) * limit
  const sortField = query.sortField || 'createdAt'
  const sortOrder = query.sortOrder || 'DESC'

  const favourites = await Favourite.findAll({
    where: {
      UserId: currentUser.id
    },
    offset,
    limit,
    order: [[sortField, sortOrder]]
  })

  res.status(200).json({ favourites })
}

export default nc()
  .use(myFavouritePageIndex)
