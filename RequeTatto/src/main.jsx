import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { OptionProvider } from './context/option.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OptionProvider>
      <App />
    </OptionProvider>
  </StrictMode>,
)
