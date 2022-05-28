import { QueryResolvers } from "../generated/graphql-types";
import { DatabaseContext } from "../resolvers";

const queryResolver: QueryResolvers<DatabaseContext> = {
  books: (_parent, _args, { db }) => db.getAllBooks(),
  book: (_parent, args, { db }) => db.getBook(args.id),
};

export default queryResolver;
