const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Create a new book
router.post('/', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    publicationDate: req.body.publicationDate
  });
  try {
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get a specific book
router.get('/:bookId', async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a book
router.put('/:bookId', async (req, res) => {
  try {
    const updatedBook = await Book.updateOne(
      { _id: req.params.bookId },
      { $set: { 
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publicationDate: req.body.publicationDate
      }}
    );
    res.json(updatedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a book
router.delete('/:bookId', async (req, res) => {
  try {
    const removedBook = await Book.remove({ _id: req.params.bookId });
    res.json(removedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
