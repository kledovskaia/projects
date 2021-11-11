import express from "express";
import cors from "cors";
import helmet from "helmet";
import { ApolloServer } from "apollo-server-express";
import db from "./db";
// import typeDefs from "./schema";
// import resolvers from "./resolvers";

const port = process.env.PORT || 8001;
const host = process.env.DB_HOST;
const root = process.env.ROOT;

// db.connect(host);

const app = express();
app.use(cors());
app.use(helmet());

db.connect(host);

const server = new ApolloServer({
  // typeDefs, resolvers
});

server.applyMiddleware({ app, path: root });

app.listen({ port }, () => {
  console.log(`listening on port ${port}`);
});
