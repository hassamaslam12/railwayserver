import express from 'express'

const app = express()

const port =  process.env.PORT || 3000

app.get('/hello', (req, res) => {
  res.send('Hello fellows! \n\n other options are / & /bye ')
  console.log(`${req.ip} is saying hello`)
})
app.get('/bye', (req, res) => {
    res.send('ALLAH HAFIZ  \n\n other options are /hello & / ')
    console.log(`${req.ip} is saying bye`)
})
app.get('/', (req, res) => {
    res.send('kuch tou bolo  \n\n other options are /hello & /bye ')
    console.log(`${req.ip} is not saying anything`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
