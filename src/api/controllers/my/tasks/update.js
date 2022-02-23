import nc from 'next-connect'

const dateTasksUpdate = async (req, res) => {
  const { currentTask } = res

  await currentTask.update(req.body, {
    fields: ['duty']
  })
  await currentTask.reload()

  res.status(200).json({ task: currentTask })
}

export default nc()
  .use(dateTasksUpdate)
