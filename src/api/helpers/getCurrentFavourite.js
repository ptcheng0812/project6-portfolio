import { Favourite } from '@/db/models'

const getCurrentFavourite = async (req, res, next) => {
  const { query: { id } } = req

  console.log('favouriteId>>>>>>', id)

  const currentFavourite = await Favourite.findOne({
    where: {
      PostId: Number(id) || 0
    },
    include: Favourite.Post
  })

  if (!currentFavourite) return res.status(404).json({ message: 'Favourite Not Found' })
  res.currentFavourite = currentFavourite

  return next()
}

export default getCurrentFavourite
