import Book from "../models/Book.js";

export async function getAllBooks() {
  return Book.find();
}

export async function getBookById(id) {
  return Book.findById(id);
}

export async function createBook(data) {
  const book = new Book(data);
  return book.save();
}

export async function updateBook(id, data) {
  return Book.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteBook(id) {
  await Book.findByIdAndDelete(id);
  return `Book with id ${id} deleted`;
}
