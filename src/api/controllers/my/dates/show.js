import nc from 'next-connect'

const myDatesShow = (req, res) => {
  const { currentDate } = res

  res.status(200).json({ date: currentDate })
}

export default nc()
  .use(myDatesShow)
