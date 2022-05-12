const { Schema, model } = require('mongoose')

const PostSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
})

const Post = model('Post', PostSchema)

module.exports = Post
