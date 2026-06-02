import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import favicon from './assets/stuffex_favicon.png'

const link = document.querySelector<HTMLLinkElement>("link[rel*='icon']") || document.createElement('link')
link.type = 'image/png'
link.rel = 'icon'
link.href = favicon
document.head.appendChild(link)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)