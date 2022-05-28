import { Book } from "../generated/graphql-types";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

class Database {
  getAllBooks(): Book[] {
    return books;
  }
}

export default Database;
