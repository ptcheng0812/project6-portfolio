import nc from 'next-connect'

const myDatesDestroy = async (req, res) => {
  const { currentDate } = res

  await currentDate.destroy()

  res.status(204).json()
}

export default nc()
  .use(myDatesDestroy)
