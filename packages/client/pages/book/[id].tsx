import { useRouter } from "next/router";
import Link from "next/link";
import { useBookQuery } from "../../generated/graphql-types";

const Book = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useBookQuery({
    variables: { id: id as string },
    skip: !id,
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (!data) return null;

  if (!data.book) {
    return (
      <main>
        <h1>404</h1>
        <p>No data found.</p>
        <Link href={`/`}>
          <a>&larr; Back to Homepage</a>
        </Link>
      </main>
    );
  }

  const { title, author } = data.book;

  return (
    <main>
      <h1>{title}</h1>
      <p>{author}</p>
      <Link href={`/`}>
        <a>&larr; Back to Homepage</a>
      </Link>
    </main>
  );
};

export default Book;
