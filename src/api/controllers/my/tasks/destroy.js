import nc from 'next-connect'

const dateTasksDestroy = async (req, res) => {
  const { currentTask } = res

  await currentTask.destroy()

  res.status(204).json()
}

export default nc()
  .use(dateTasksDestroy)
