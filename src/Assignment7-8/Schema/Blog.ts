import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  categories: [String],
  tags: [String],
  datePosted: Date,
  comments: [{ body: String, date: Date }]
});

const Post = mongoose.model('Post', postSchema);

export default  Post;
