import { gql } from "@apollo/client";

export const GET_BOOKS_LIST = gql`
  query Books {
    books {
      id
      title
    }
  }
`;

export const GET_BOOK = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id
      title
      author
    }
  }
`;
