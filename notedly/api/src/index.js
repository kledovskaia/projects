const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const cors = require('cors');
const db = require('./db');
const depthLimit = require('graphql-depth-limit');
const { createComplexityLimitRule } = require('graphql-validation-complexity');

const getUser = token => {
  if (token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error('Session invalid');
    }
  }
};

require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const port = process.env.PORT || 4000;

const typeDefs = require('./schema');
const models = require('./models');
const resolvers = require('./resolvers');

const app = express();
app.use(helmet());
app.use(cors());

db.connect(DB_HOST);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
  context: ({ req }) => {
    const token = req.headers.authorization;
    const user = getUser(token);
    return { models, user };
  }
});

server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);
