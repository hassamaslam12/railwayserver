import express from 'express'
import path from 'path'

const app = express()

const port =  process.env.PORT || 3000

app.get('/weather', (req, res) => {
  
  console.log(`${req.ip} is asking for weather`)
  res.send({
    city:"karachi", 
    temp : 25,
    min_temp : 15,
    max_temp : 30,
    humidity : 80
  })
})

const __dirName =path.resolve();
app.get('/',express.static(path.join(__dirName,"/web/index.html")))
app.use('/',express.static(path.join(__dirName,"/web")))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
