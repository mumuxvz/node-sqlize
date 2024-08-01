const BookModel = require("../models/Book");
const { createBook, getAllBooks, getBook, editBook, deleteBook } = require("../controller/BookController");

const express = require("express");
const router = express.Router();

// Handle the POST request to create a book.
router.post("/create-book", createBook);
router.get("/get-book", getBook);
router.get("/get-all-books", getAllBooks);
router.put("/", editBook);
router.delete("/", deleteBook);

module.exports = router;
