import express from "express";
import cors from "cors";
import helmet from "helmet";
import { ApolloServer } from "apollo-server-express";
import db from "./db.js";
import typeDefs from "./schema.js";
import resolvers from "./resolvers/index.js";
import * as models from "./models/index.js";
import dotenv from "dotenv";
import { validateJWT } from "./jwt.js";
dotenv.config();

const port = process.env.PORT || 8001;
const host = process.env.DB_HOST;

const getUser = (token) => {
  if (!token) return;
  try {
    return validateJWT(token);
  } catch {
    throw new Error("Session is Invalid");
  }
};

const app = express();
app.use(helmet());
app.use(cors());

db.connect(host);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization;
    const user = getUser(token);
    return { models, user };
  },
});
server.applyMiddleware({ app, path: "/", cors: false });

app.listen({ port }, () => {
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  );
});
