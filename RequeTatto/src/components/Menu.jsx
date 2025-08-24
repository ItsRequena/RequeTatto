import { useState, useContext } from 'react';
import './Menu.css'; // CSS externo para mantener ordenado

export function Menu() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => { setIsOpen(!isOpen);}

  const openGame = async (game) => {
    setGameType(game);
    toggleMenu();
  }

  const openGithub = (game) => {
    window.open("https://github.com/ItsRequena");
  }

  return (
    <>
      <div
        className="menu-toggle"
        onClick={toggleMenu}
        style={{ cursor: 'pointer' }}
      >
        {isOpen ? '✖' : '☰'}
      </div>

      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        {/* <Logo/> */}
        <div className='contentOptions'>
            <ul>
                <li><h4 className='blocked' href="#">Información</h4></li>
                <li>
                  <a href="#" onClick={() => openGame('normal')}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                        role="img" aria-label="Máquina de tatuar"
                      >
                        <path d="M5 6h7l2 2v3H5z"/>
                        <circle cx="8" cy="10" r="1.5"/>
                        <circle cx="12" cy="10" r="1.5"/>
                        <path d="M14 11l2 2"/>
                        <rect x="15.5" y="12.5" width="3.5" height="5" rx="1" ry="1"/>
                        <path d="M19 17.5l3 3"/>
                        <circle cx="12" cy="6" r="1"/>
                        <path d="M7 6V4m2 2V4"/>
                      </svg>

                      Galería de Tatuajes
                  </a>
                </li>
                <li>
                    <a href="#" onClick={() => openGame('paises')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid2x2 size-4">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="M3 12h18"></path>
                          <path d="M12 3v18"></path>
                      </svg>
                        Láminas
                    </a>
                </li>
                <li>
                  <a href="#" onClick={() => openGame('jugadores')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" role="img" aria-label="Usuario">
                        <path fill="currentColor" d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-5 0-9 2.7-9 6v1h18v-1c0-3.3-4-6-9-6Z"/>
                      </svg>
                      Contacto
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => openGame('youtubers')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Calendario" >
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
                <li><h4 className='blocked' href="#">Creado por</h4></li>
                <li>
                    <a href="#" onClick={() => openGithub()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.371 0 0 5.373 0 12c0 5.301 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577
                        0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
                        1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.931
                        0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404
                        1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.119 3.176.77.84
                        1.233 1.911 1.233 3.221 0 4.609-2.807 5.624-5.479 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293
                        0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>

                        ItsRequena
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </>
  );
}
