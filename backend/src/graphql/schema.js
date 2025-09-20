import { gql } from "apollo-server-express";

const typeDefs = gql` #gql is a tag function that parses the schema provided by the template literal 
  type Book {
    id: ID!
    title: String!
    author: String!
    createdAt: String
    updatedAt: String
    displayName: String   # NEW computed field
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
    updateBook(id: ID!, title: String, author: String): Book
    deleteBook(id: ID!): String
  }
`;

export default typeDefs;
