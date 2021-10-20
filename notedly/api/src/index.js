const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./db');
require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const port = process.env.PORT || 4000;

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();

db.connect(DB_HOST);

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);
