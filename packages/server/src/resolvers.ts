import Database from "./db";
import { Resolvers } from "./generated/graphql-types";
import Query from "./resolvers/Query";

export interface DatabaseContext {
  db: Database;
}

const resolvers: Resolvers<DatabaseContext> = {
  Query,
};

export default resolvers;
