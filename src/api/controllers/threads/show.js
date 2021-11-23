import nc from 'next-connect'

const threadsShow = (req, res) => {
  const { currentThread } = res

  res.status(200).json({ thread: currentThread })
}

export default nc()
  .use(threadsShow)
