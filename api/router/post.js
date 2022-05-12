const { Router } = require('express')
const Post = require('../models/Post')

const post = Router()

post.get('/', (req, res) => {
  res.send('<h1> hello this is external router</h1>')
})

post.post('/', async (req, res) => {
  const { title, description } = req.body

  const post = new Post({ title, description })
  const result = await post.save()

  res.json(result)
})

module.exports = post
