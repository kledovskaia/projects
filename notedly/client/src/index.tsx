import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router } from "react-router-dom"
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client"
import { setContext } from "apollo-link-context"
import { AuthProvider } from "./context/Auth"

const uri = process.env.API_URI || "http://localhost:4000/api"
const cache = new InMemoryCache()

const httpLink = createHttpLink({ uri })
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
  cache,
  connectToDevTools: true,
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
