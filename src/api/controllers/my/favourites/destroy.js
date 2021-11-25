import nc from 'next-connect'

const favouritesDestroy = async (req, res) => {
  const { currentFavourite } = res

  await currentFavourite.destroy()

  res.status(204).json()
}

export default nc()
  .use(favouritesDestroy)
