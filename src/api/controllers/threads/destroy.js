import nc from 'next-connect'

const threadsDestroy = async (req, res) => {
  const { currentThread } = res

  await currentThread.destroy()

  res.status(204).json()
}

export default nc()
  .use(threadsDestroy)
