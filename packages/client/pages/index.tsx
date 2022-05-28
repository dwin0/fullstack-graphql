import Head from "next/head";
import Link from "next/link";
import client from "../apollo-client";
import styles from "../styles/Home.module.css";
import { GET_BOOKS_LIST } from "../queries/books";
import {
  Book,
  BooksQuery,
  BooksQueryVariables,
} from "../generated/graphql-types";

export default function Home({ books }: { books?: Book[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fullstack App</title>
        <meta name="description" content="fullstack app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Books:</h1>
        <ul>
          {books?.map((book) => (
            <li key={book.id}>
              <Link href={`/book/${book.id}`}>
                <a>{book.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query<BooksQuery, BooksQueryVariables>({
    query: GET_BOOKS_LIST,
  });

  return {
    props: {
      books: data.books,
    },
  };
}
