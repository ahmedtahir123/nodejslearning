import express from 'express';
const router = express.Router();
import Post from '../Schema/Blog';
import { QueryDateRange, QueryTags } from '../type';

  router.post('/', async (req, res) => {
    try {
      const post = new Post(req.body);
      await post.save();
      res.status(201).json(post);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
    });

  router.get('/', async (req, res) => {
      try {
        const posts = await Post.find();
        res.json();
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    });

  router.get('/:id', async (req, res) => {
      try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        post.views = post.views + 1;
        await post.save();
        res.json();
      } catch (error:  any) {
        res.status(500).json({ message: error.message });
      }
    });

  router.put('/:id', async (req, res) => {
    try {
      const postId = req.params.id;
      const userId = req.body.author; 

      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).send('Post not found');
      }

      if (post.author !== userId) {
        return res.status(403).send('User not authorized to update this post');
      }

      const updatedPost = await Post.findByIdAndUpdate(postId, req.body, { new: true });
      res.json(updatedPost);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
    });

  router.delete('/:id', async (req, res) => {
    try {
      const postId = req.params.id;
      const userId = req.body.author; 

      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).send('Post not found');
      }

      if (post.author !== userId) {
        return res.status(403).send('User not authorized to delete this post');
      }

      await Post.findByIdAndDelete(postId);
      res.status(200).send('Post deleted');
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
    });

  router.get('/author/:authorName', async (req, res) => {
    try {
      const posts = await Post.find({ author: req.params.authorName });
      if (posts.length === 0) {
        return res.status(404).json({ message: 'No posts found for this author' });
      }
      res.json(posts);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
    });

  router.get('/tags', async (req, res) => {
    try {
      const queryTags: QueryTags = req.query as any;
      const posts = await Post.find({ tags: { $all: queryTags.tags } });
      res.json(posts);
    } catch (err:  any) {
      res.status(500).json({ message: err.message });
    }
    });

  router.get('/date', async (req, res) => {
    try {
      const { startDate, endDate }: QueryDateRange = req.query as any; 
      const posts = await Post.find({
        datePosted: {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        }
      });
      res.json(posts);
    } catch (err:  any) {
      res.status(500).json({ message: err.message });
    }
    });

  router.get('/stats/authors', async (req, res) => {
      try {
        const authorStats = await Post.aggregate([
          { $group: { _id: "$author", numberOfPosts: { $sum: 1 } } },
          { $sort: { numberOfPosts: -1 } }
        ]);
        res.json(authorStats);
      } catch (err: any) {
        res.status(500).json({ message: err.message });
      }
    }); 
    
    
  router.get('/sorted/date', async (req, res) => {
      try {
        const sortedPosts = await Post.find().sort({ datePosted: -1 });
        res.json(sortedPosts);
      } catch (err: any) {
        res.status(500).json({ message: err.message });
      }
    });

  router.post('/filter', async (req, res) => {
      const { tags, startDate, endDate } = req.body;
    
      try {
        const filteredPosts = await Post.aggregate([
          { 
            $match: {
              tags: { $in: tags },
              datePosted: { $gte: new Date(startDate), $lte: new Date(endDate) }
            }
          },
          { $sort: { datePosted: -1 } }
        ]);
        res.json(filteredPosts);
      } catch (err: any) {
        res.status(500).json({ message: err.message });
      }
    });
  
  router.get('/recent', async (req, res) => {
      try {
        const recentPosts = await Post.find().sort({ datePosted: -1 }) 
        res.json(recentPosts);
      } catch (err: any) {
        res.status(500).json({ message: err.message });
      }
  });

  router.get('/popular', async (req, res) => {
    try {
      const popularPosts = await Post.find().sort({ views: -1 })
      res.json(popularPosts);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  router.get('/engaging', async (req, res) => {
    try {
      const popularPosts = await Post.find().sort({ views: -1 })
      res.json(popularPosts);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });

  router.post('/aggregate', async (req, res) => {
    try {
      const criteria = req.body.criteria;
      const aggregatedPosts = await aggregatePosts(criteria);
      res.json(aggregatedPosts);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  });


  async function aggregatePosts(criteria: any): Promise<any> {
    const pipeline = [];
  
    // Add match stage to filter posts based on criteria
    if (criteria.author) {
      pipeline.push({ $match: { author: criteria.author } });
    }
  
    if (criteria.dateRange) {
      pipeline.push({
        $match: {
          createdAt: {
            $gte: new Date(criteria.dateRange.start),
            $lte: new Date(criteria.dateRange.end)
          }
        }
      });
    }
  
    const aggregatedPosts = await Post.aggregate(pipeline);
    return aggregatedPosts;


   // Sample post
    
   // {
    //   "criteria": {
    //     "author": "new Author",
    //     "dateRange": {
    //       "start": "2022-01-01",
    //       "end": "2022-12-31"
    //     },
    //      "tags": ["loving", "Horror"]
    //   }
    // }
  }

  export default router;