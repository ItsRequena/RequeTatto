import { useState,useContext } from 'react'
import './App.css'
import { Menu } from './components/Menu.jsx'
import { Logo } from './components/Logo.jsx'
import { Main } from './components/Main.jsx'
import { OptionContext } from './context/option.jsx'

function App() {
  const {option, isMenuOpen} = useContext(OptionContext)

  return (
    <>
      <Logo/>
      <Menu/>
      <div className={`app-content ${isMenuOpen ? "menu-open" : ""}`}>
        {option === 'main' && <Main/>}
      </div>
    </>
  )
}

export default App
