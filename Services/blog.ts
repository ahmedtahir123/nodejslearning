import { Router } from 'express';
import { Blog } from '../Models/blog';

const router = Router();


const blogs: Blog[] = [];

router.get('/blogs', (req, res) => {
  res.json(blogs);
});

router.get('/blogs/:id', (req, res) => {
    const blog = blogs.find(b => b.id === req.params.id);
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    res.json(blog);
  });

  router.post('/blogs', (req, res) => {
    
    const { title, content, username } = req.body;
    const newBlog = new Blog(new Date().valueOf().toString(), title, content, username, blogs.length ? blogs.length + 1 : 1 );
    blogs.push(newBlog);
    res.status(201).json(newBlog);
  });


  router.put('/blogs/:id', (req, res) => {
    const { title, content } = req.body;
    const blog = blogs.find(b => b.id === req.params.id);
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    blog.title = title;
    blog.content = content;
    res.json(blog);
  });

  router.delete('/blogs/:id', (req, res) => {
    const index = blogs.findIndex(b => b.id === req.params.id);
    if (index === -1) {
      return res.status(404).send('Blog not found');
    }
    blogs.splice(index, 1);
    res.status(204).send();
  });

export default router;