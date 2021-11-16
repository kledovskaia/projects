require("dotenv").config();
const express = require("express");
const ApolloServer = require("apollo-server-express");
const cors = require("cors");
const helmet = require("helmet");
const db = require("./db");
const jwt = require("jsonwebtoken");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const port = process.env.PORT || 8080;
const host = process.env.DB_HOST;

const app = express();
app.use(helmet());
app.use(cors());

db.connect(host);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: process.env.ROOT });

server.listen({ port }, () => {
  `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`;
});
