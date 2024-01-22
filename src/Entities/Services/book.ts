import { Router } from 'express';
// import { permission } from '../Middleware/permission';

import { getConnection, getRepository } from 'typeorm';
import { books as bookStore } from '../Book';

const router = Router();

  // Get all bookss
router.get('/', async (req, res) => {
  const bookRepository = getRepository(bookStore);
  const books = await bookRepository.find();
  res.json(books);
});

// Get book by ID
router.get('/:id', async (req, res) => {
  const bookRepository = getRepository(bookStore);
  const book = await bookRepository.findOneBy( {id: parseInt(req.params.id) });
  return book ? res.json(book) : res.status(404).send('Book not found');
});

// Create a new book
router.post('/', async (req, res) => {
  const bookRepository = getRepository(bookStore);
  const book = bookRepository.create(req.body);
  const result = await bookRepository.save(book);
  res.status(201).json(result);
});

// Update a book
router.put('/:id', async (req, res) => {
  const bookRepository = getRepository(bookStore);
  const book = await bookRepository.findOneBy( {id: parseInt(req.params.id) });
  if (book) {
    bookRepository.merge(book, req.body);
    const result = await bookRepository.save(book);
    return res.json(result);
  }
  return res.status(404).send('Book not found');
});

// Delete a book
router.delete('/:id', async (req, res) => {
  const bookRepository = getRepository(bookStore);
  const result = await bookRepository.delete(req.params.id);
  return result.affected ? res.status(204).send() : res.status(404).send('Book not found');
});

router.get('/author/:author', async (req, res) => {
  try {
    const books = await findBooksByAuthor(req.params.author);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get books by title
router.get('/title/:title', async (req, res) => {
  try {
    const books = await findBooksByTitle(req.params.title);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get books by genre
router.get('/genre/:genre', async (req, res) => {
  try {
    const books = await findBooksByGenre(req.params.genre);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


  async function findBooksByAuthor(author: string): Promise<bookStore[]> {
    return getConnection()
      .getRepository(bookStore)
      .createQueryBuilder("book")
      .where("book.author = :author", { author })
      .getMany();
  }
  
  async function findBooksByTitle(title: string): Promise<bookStore[]> {
    return getConnection()
      .getRepository(bookStore)
      .createQueryBuilder("book")
      .where("book.title = :title", { title })
      .getMany();
  }
  
  async function findBooksByGenre(genre: string): Promise<bookStore[]> {
    return getConnection()
      .getRepository(bookStore)
      .createQueryBuilder("book")
      .where("book.genre = :genre", { genre })
      .getMany();
  }

export default router;