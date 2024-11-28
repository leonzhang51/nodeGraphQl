import { gql, ApolloServer } from "apollo-server";
import Schema from "./Schema";
import resolvers from "./Resolver";

// const typeDefs = gql`
//   type Query {
//     greeting: String
//   }
// `;

// const resolvers = {
//   Query: {
//     greeting: () => "Hello GraphQL world! xxxx👋",
//   },
// };

const server = new ApolloServer({ typeDefs: Schema, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
