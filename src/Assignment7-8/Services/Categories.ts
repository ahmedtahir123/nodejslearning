import express from 'express';
import Category from '../Schema/Categories';

const router = express.Router();

// POST - Create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// GET - Retrieve all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default  router ;
