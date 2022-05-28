import { QueryResolvers } from "../generated/graphql-types";
import { DatabaseContext } from "../resolvers";

const queryResolver: QueryResolvers<DatabaseContext> = {
  books: (_1, _2, { db }) => db.getAllBooks(),
};

export default queryResolver;
