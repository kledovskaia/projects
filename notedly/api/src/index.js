const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const db = require('./db');
require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const port = process.env.PORT || 4000;

const models = require('./models');

let notes;
db.connect(DB_HOST);

// [
//   {
//     id: '1',
//     content: 'This is a note',
//     author: 'Adam Scott'
//   },
//   {
//     id: '2',
//     content: 'This is another note',
//     author: 'Harlow Everly'
//   },
//   {
//     id: '3',
//     content: 'Oh hey look, another note!',
//     author: 'Riley Harrison'
//   }
// ];

// Cтроим схему с помощью языка схем GraphQL
const typeDefs = gql`
  type Note {
    id: ID
    content: String
    author: String
  }
  type Query {
    hello: String
    notes: [Note]
    note(id: ID, author: String): Note
  }
  type Mutation {
    addNote(content: String, author: String): Note
  }
`;
// Gредоставляем функции распознавания для полей схемы
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    notes: async () => models.Note.find(),
    note: async (_, args) => models.Note.find(args)
  },
  Mutation: {
    addNote: (_, { content, author }) => {
      const newNote = {
        content,
        author
      };
      return models.Note.create(newNote);
    }
  }
};

const app = express();

// Настройка Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Применяем промежуточное ПО Apollo GraphQL и указываем путь к /api
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);
