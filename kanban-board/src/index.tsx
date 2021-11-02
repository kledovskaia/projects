import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App/App'
import { AppStateProvider } from './context/AppStateProvider'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
