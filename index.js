const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Wonderful World!')
})

app.get('/uzytkownicy', (req, res) => {
  res.send('Retrieving users...')
})

app.get('/produkty', (req, res) => {
  res.send('Retrieving products...')
})

app.get('/zamowienia', (req, res) => {
  res.send('Retrieve orders...')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})