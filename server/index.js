// Express App Setup
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/all', async (req, res) => {
  res.send('all')
})

app.get('/one', async (req, res) => {
  res.send('one')
})

app.listen(5000, err => {
  console.log('Listening')
})
