const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Wonderful World!')
})

app.get('/users', (req, res) => {
  res.send('Getting users...')
})

app.get('/products', (req, res) => {
  res.send('Getting products...')
})

app.get('/orders', (req, res) => {
  res.send('Getting orders...')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})