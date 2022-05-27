import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import styles from "../styles/Home.module.css";

type Book = {
  title: string;
  author: string;
};

export default function Home({ books }: { books: Book[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fullstack App</title>
        <meta name="description" content="fullstack app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {books.map((book) => (
            <li key={book.title}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Books {
        books {
          title
          author
        }
      }
    `,
  });

  return {
    props: {
      books: data.books,
    },
  };
}
