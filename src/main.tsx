import React from 'react'
import './style/style.scss'
import './Color/style.scss'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/index.tsx'
import Rotas from './Pages/Router/Router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </Layout>
  </React.StrictMode>,
)
