import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { OptionProvider } from './context/option.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OptionProvider>
      <App />
    </OptionProvider>
  </StrictMode>,
)
