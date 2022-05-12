const express = require('express')
const cors = require('cors')
require('dotenv').config()
const post = require('./api/router/post')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

main().catch((err) => console.log(err))

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL)
  } finally {
    console.log('db connected')
  }
}

// app
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(post)

// server
app.listen(port, () => {
  console.log(`the server is running on http://localhost:${port}`)
})
