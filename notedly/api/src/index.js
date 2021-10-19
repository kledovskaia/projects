const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Запускаем сервер на порте, указанном в файле .env, или на порте 4000
const port = process.env.PORT || 4000;

let notes = [
  {
    id: '1',
    content: 'This is a note',
    author: 'Adam Scott'
  },
  {
    id: '2',
    content: 'This is another note',
    author: 'Harlow Everly'
  },
  {
    id: '3',
    content: 'Oh hey look, another note!',
    author: 'Riley Harrison'
  }
];

// Cтроим схему с помощью языка схем GraphQL
const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }
  type Query {
    hello: String!
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Mutation {
    newNote(content: String!): Note!
  }
`;
// Gредоставляем функции распознавания для полей схемы
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    notes: () => notes,
    note: (_, args) => {
      return notes.find(note => note.id === args.id);
    }
  },
  Mutation: {
    newNote: (_, args) => {
      let noteValue = {
        id: String(notes.length + 1),
        content: args.content,
        author: 'Adam Scott'
      };
      notes.push(noteValue);
      return noteValue;
    }
  }
};

const app = express();

// Настройка Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: { version: '1.7.25' }
});

// Применяем промежуточное ПО Apollo GraphQL и указываем путь к /api
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);
