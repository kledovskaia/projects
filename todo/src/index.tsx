import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App/App"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import { EditModeContextProvider } from "./context/editMode"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <EditModeContextProvider>
          <App />
        </EditModeContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
