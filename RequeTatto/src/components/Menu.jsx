import { useContext } from 'react';
import { openInstagramProfile } from '../services/instagram.js'
import { OptionContext } from '../context/option';
import requeTattoLogo from '../images/newRequeTattoLogo.png'
import iconoMaquinaTatuar from '../images/iconoMaquinaTatuar.png'
import '../styles/Menu.css'; 

export function Menu() {
  const {isMenuOpen, setOption, setIsMenuOpen} = useContext(OptionContext)

  const toggleMenu = () => { 
    setIsMenuOpen(!isMenuOpen)
  }

  const openView = async (newOption) => {
    setOption(newOption);
    toggleMenu();
  }

  return (
    <>
      <div
        className="menu-toggle"
        onClick={toggleMenu}
        style={{ cursor: 'pointer' }}
      >
        {isMenuOpen ? '✖' : '☰'}
      </div>

      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className='contentOptions'>
            <ul>
                <li><h4 className='blocked'>Información</h4></li>
                <li>
                  <a onClick={() => openView('tatto')}>
                    <img src={iconoMaquinaTatuar} style={{width:"16px", height:"16px"}}/>
                      Tatuajes
                  </a>
                </li>
                <li>
                    <a onClick={() => openView('leafs')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid2x2 size-4">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="M3 12h18"></path>
                          <path d="M12 3v18"></path>
                      </svg>
                        Láminas
                    </a>
                </li>
                <li>
                  <a onClick={() => openView('main')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img" aria-label="Usuario">
                        <path fill="currentColor" d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-5 0-9 2.7-9 6v1h18v-1c0-3.3-4-6-9-6Z"/>
                      </svg>
                      Contacto
                  </a>
                </li>
                <li>
                  <a onClick={() => openView('calendar')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Calendario" >
                    <line x1="8" y1="2" x2="8" y2="5"/>
                    <line x1="16" y1="2" x2="16" y2="5"/>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                    <circle cx="7" cy="14" r="1"/>
                    <circle cx="12" cy="14" r="1"/>
                    <circle cx="17" cy="14" r="1"/>
                    <circle cx="7" cy="18" r="1"/>
                    <circle cx="12" cy="18" r="1"/>
                    <circle cx="17" cy="18" r="1"/>
                  </svg>
                    Reservas
                  </a>
                </li>
            </ul>
            <ul>
                <li>
                  <div className='menuBottom'>
                    <img onClick={openInstagramProfile} src={requeTattoLogo} className='menuLogo' alt="RequeTatto logo" />
                  </div>
                </li>
            </ul>
        </div>
      </div>
    </>
  );
}
