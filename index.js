const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('<h1>hello</h1>')
})

app.listen(port, () => {
  console.log(`the server is running on http://localhost:${port}`)
})
