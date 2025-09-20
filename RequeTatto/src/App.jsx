import { useContext } from 'react'
import { TattoGallery } from './components/TattoGallery.jsx'
import { OptionContext } from './context/option.jsx'
import { Calendar } from './components/Calendar.jsx'
import { Menu } from './components/Menu.jsx'
import { Main } from './components/Main.jsx'
import { Leafs } from './components/Leafs.jsx'
import './App.css'

function App() {
  const {option, isMenuOpen} = useContext(OptionContext)

  return (
    <>
      <Menu/>
      <div className={`app-content ${isMenuOpen ? "menu-open" : ""}`}>
        {option === 'main' && <Main/>}
        {option === 'tatto' && <TattoGallery/>}
        {option === 'leafs' && <Leafs/>}
        {option === 'calendar' && <Calendar/>}
      </div>
    </>
  )
}

export default App
