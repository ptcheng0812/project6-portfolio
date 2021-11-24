import nc from 'next-connect'

const threadPostsUpdate = async (req, res) => {
  const { currentPost } = res

  await currentPost.update(req.body, {
    fields: ['content']
  })
  await currentPost.reload()

  res.status(200).json({ post: currentPost })
}

export default nc()
  .use(threadPostsUpdate)
