import { ApolloServer } from "apollo-server";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { GRAPHQL_SCHEMA_PATH } from "./constants";
import resolvers, { DatabaseContext } from "./resolvers";
import Database from "./db";

const SCHEMA = loadSchemaSync(GRAPHQL_SCHEMA_PATH, {
  loaders: [new GraphQLFileLoader()],
});

const server = new ApolloServer({
  schema: addResolversToSchema({
    schema: SCHEMA,
    resolvers,
  }),
  context: (): DatabaseContext => ({ db: new Database() }),
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
