import nc from 'next-connect'

const usersShow = (req, res) => {
  const { currentPublicUser } = res

  res.status(200).json({ user: currentPublicUser })
}

export default nc()
  .use(usersShow)
