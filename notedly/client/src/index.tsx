import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router } from "react-router-dom"

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const uri = process.env.API_URI
const cache = new InMemoryCache()
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
