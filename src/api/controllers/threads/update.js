import nc from 'next-connect'

const threadsUpdate = async (req, res) => {
  const { currentThread } = res

  await currentThread.update(req.body, {
    fields: ['title', 'category']
  })
  await currentThread.reload()

  res.status(200).json({ thread: currentThread })
}

export default nc()
  .use(threadsUpdate)
