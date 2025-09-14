import { useEffect, useState } from 'react'
/* Listado de tatuajes*/
import elitefightclub from '../images/leafs/elitefightclub.jpg'
import galaxyfc from '../images/leafs/galaxyfc.jpg'

import { openEliteFightClubLeaf, openGalaxyFcLeaf } from '../services/instagram'
import '../styles/Leafs.css'

export function Leafs(){

    const [expandedImageUrl, setExpandedImageUrl] = useState('')

    useEffect(() => {
        openLeaf()
    }, [expandedImageUrl])

    const openLeaf = () => {
        if(expandedImageUrl !== ''){
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            modal.style.display = 'flex';
            modalImage.src = expandedImageUrl;
        }
    }

return (
        <>
        <div className='page'>
            <header>
            </header>
            <main >
                {expandedImageUrl && 
                <div className="modal" id="imageModal" onClick={() => setExpandedImageUrl('')} >
                    <img id="modalImage" src={null} alt="Imagen ampliada"></img>
                </div>}
                <ul className='leaf-box'>
                    <li className='leaf'>
                        <h2 className='fuente'>Élite Fight Club</h2>
                        <img onClick={() => setExpandedImageUrl(elitefightclub)} alt="elitefightclub" src={elitefightclub}></img>
                        <button onClick={openEliteFightClubLeaf} className='buy-leaf-button'>COMPRAR</button>
                    </li>
                    <li className='leaf'>
                        <h2 className='fuente'>Galaxy FC</h2>
                        <img onClick={() => setExpandedImageUrl(galaxyfc)} alt="galaxyfc" src={galaxyfc}></img>
                        <button onClick={openGalaxyFcLeaf} className='buy-leaf-button'>COMPRAR</button>
                    </li>
                </ul>
            </main>
        </div>
        </>
    )
}