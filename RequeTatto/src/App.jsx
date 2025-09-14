import { useState,useContext } from 'react'
import './App.css'
import { Menu } from './components/Menu.jsx'
import { Logo } from './components/Logo.jsx'
import { Main } from './components/Main.jsx'
import { OptionContext } from './context/option.jsx'
import { TattoGallery } from './components/TattoGallery.jsx'
import { Leafs } from './components/Leafs.jsx'

function App() {
  const {option, isMenuOpen} = useContext(OptionContext)

  return (
    <>
      <Menu/>
      <div className={`app-content ${isMenuOpen ? "menu-open" : ""}`}>
        {option === 'main' && <Main/>}
        {option === 'tatto' && <TattoGallery/>}
        {option === 'leafs' && <Leafs/>}
      </div>
    </>
  )
}

export default App
