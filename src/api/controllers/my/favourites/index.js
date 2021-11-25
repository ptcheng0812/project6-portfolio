import nc from 'next-connect'

import { Favourite } from '@/db/models'

const myFavouriteIndex = async (req, res) => {
  const { currentUser } = res

  const favourites = await Favourite.findAll({
    where: {
      UserId: currentUser.id
    }
  })

  res.status(200).json({ favourites })
}

export default nc()
  .use(myFavouriteIndex)
