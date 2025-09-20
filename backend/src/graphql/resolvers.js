import * as bookService from "../services/bookService.js";

const resolvers = {
  Query: {
    books: () => bookService.getAllBooks(),
    book: (_, { id }) => bookService.getBookById(id),
  },
  Mutation: {
    addBook: (_, { title, author }) => bookService.createBook({ title, author }),
    updateBook: (_, { id, title, author }) => bookService.updateBook(id, { title, author }),
    deleteBook: (_, { id }) => bookService.deleteBook(id),
  },
  Book: {   // field-level resolver
    displayName: (book) =>
      `${book.title} (Created: ${new Date(book.createdAt).toLocaleDateString()})`,
  },
};

export default resolvers;
