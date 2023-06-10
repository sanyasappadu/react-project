// import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App1'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <App1 />
    </BrowserRouter>
  </React.StrictMode>

)
