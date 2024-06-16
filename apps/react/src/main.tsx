import './styles/globals.css'

import { LIFFProvider } from '@iamprompt/react-liff'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LIFFProvider liffId={import.meta.env.VITE_LIFF_ID}>
      <App />
    </LIFFProvider>
  </React.StrictMode>,
)
