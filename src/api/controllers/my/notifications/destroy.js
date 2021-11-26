import nc from 'next-connect'

const notificationsDestroy = async (req, res) => {
  const { currentNotification } = res

  await currentNotification.destroy()

  res.status(204).json()
}

export default nc()
  .use(notificationsDestroy)
