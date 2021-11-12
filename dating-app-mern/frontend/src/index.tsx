import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.API_URI || "http://localhost:3000/";

const httpLink = new HttpLink({
  uri,
  credentials: "same-origin",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
