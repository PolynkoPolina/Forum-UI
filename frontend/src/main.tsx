import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { baseAPI } from './api/baseApi'
import { ApiProvider } from '@reduxjs/toolkit/query/react'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider api={baseAPI}>
            <App />
      </ApiProvider>
  </StrictMode>,
)
