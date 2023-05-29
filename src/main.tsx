import React from 'react'
import './style/style.scss'
import './Color/style.scss'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Pages/Router/Router.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
  </React.StrictMode>,
)
