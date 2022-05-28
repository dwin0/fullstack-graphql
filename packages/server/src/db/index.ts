import { Book } from "../generated/graphql-types";

const books: Book[] = [
  {
    id: "1",
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: "2",
    title: "City of Glass",
    author: "Paul Auster",
  },
];

class Database {
  getAllBooks(): Book[] {
    return books;
  }

  getBook(id: string): Book | null {
    return books.find((book) => book.id === id) ?? null;
  }
}

export default Database;
