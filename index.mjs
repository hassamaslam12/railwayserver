import express from 'express'

const app = express()

const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello fellows!')
  console.log(`${req.ip} is saying hello`)
})
app.get('/bye', (req, res) => {
    res.send('ALLAH HAFIZ')
    console.log(`${req.ip} is saying bye`)
})
app.get('/', (req, res) => {
    res.send('kuch tou bolo')
    console.log(`${req.ip} is not saying anything`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})