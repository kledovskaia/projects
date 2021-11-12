import express from "express";
import cors from "cors";
import helmet from "helmet";
import { ApolloServer } from "apollo-server-express";
import db from "./db.js";
import typeDefs from "./schema.js";
import resolvers from "./resolvers/index.js";
import * as models from "./models/index.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8001;
const host = process.env.DB_HOST;

const app = express();
app.use(cors());
app.use(helmet());

db.connect(host);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return { models };
  },
});
server.applyMiddleware({ app, path: "/", cors: false });

app.listen({ port }, () => {
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  );
});
