import { useState } from 'react'
import './App.css'
import { Menu } from './components/Menu.jsx'
import { Logo } from './components/Logo.jsx'
import { Main } from './components/Main.jsx'

function App() {
  const [view, setView] = useState(0)

  return (
    <>
      <Logo/>
      <Menu/>
      <Main/>
    </>
  )
}

export default App
