import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'; // 1. IMPORT THE PROVIDER
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. WRAP YOUR ENTIRE APP WITH HelmetProvider */}
    <HelmetProvider>
      <BrowserRouter basename="/punto-migrare-react/">
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)