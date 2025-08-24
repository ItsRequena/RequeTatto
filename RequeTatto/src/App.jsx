import { useState } from 'react'
import './App.css'
import { Menu } from './components/Menu.jsx'
import { Logo } from './components/Logo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo/>
      <Menu/>
      <h1>Nombre Apellido</h1>
    </>
  )
}

export default App
