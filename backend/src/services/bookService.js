import Book from "../models/Book";

async function getAllBooks() {
  return Book.find();
}

async function getBookById(id) {
  return Book.findById(id);
}

async function createBook(data) {
  const book = new Book(data);
  return book.save();
}

async function updateBook(id, data) {
  return Book.findByIdAndUpdate(id, data, { new: true });
}

async function deleteBook(id) {
  await Book.findByIdAndDelete(id);
  return `Book with id ${id} deleted`;
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
