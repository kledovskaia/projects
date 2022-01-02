import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"
import { App } from "./App"
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client"
import dotenv from "dotenv"
import { AuthContextProvider } from "./context/Auth"
import { setContext } from "apollo-link-context"
dotenv.config()

const uri = process.env.API_URI || "http://localhost:3000/"

const httpLink = createHttpLink({
  uri,
  credentials: "same-origin",
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token")
  return {
    headers: {
      ...headers,
      Authorization: token || "",
    },
  }
})

const client = new ApolloClient({
  // @ts-ignore
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
