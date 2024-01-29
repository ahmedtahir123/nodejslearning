import express from 'express';
const router = express.Router();
import Post from '../Schema/Blog';

// POST request to add a new post
router.post('/', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// GET request to fetch all posts
router.get('/', async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // GET request to fetch a single post by ID
router.get('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
      res.json();
    } catch (error:  any) {
      res.status(500).json({ message: error.message });
    }
  });

  // PUT request to update a post
router.put('/:id', async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!post) return res.status(404).json({ message: 'Post not found' });
      res.json(post);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // DELETE request to delete a post
router.delete('/:id', async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
      res.json({ message: 'Post deleted successfully' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
  

  export default router;