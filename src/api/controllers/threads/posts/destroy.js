import nc from 'next-connect'

const threadPostsDestroy = async (req, res) => {
  const { currentPost } = res

  await currentPost.destroy()

  res.status(204).json()
}

export default nc()
  .use(threadPostsDestroy)
