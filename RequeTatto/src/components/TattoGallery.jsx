/* Listado de tatuajes*/
import zeus from '../images/tattos/zeus.jpg'
import muerte from '../images/tattos/muerte.jpg'
import anubis from '../images/tattos/anubis.jpg'
import jordan from '../images/tattos/jordan.jpg'
import chicana from '../images/tattos/chicana.jpg'
import ojoscatrina from '../images/tattos/ojoscatrina.jpg'
import asturiasmadrid from '../images/tattos/asturias-madrid.jpg'
import atenas from '../images/tattos/atenas.jpg'
import golondrina from '../images/tattos/golondrina.jpg'
import horus from '../images/tattos/horus.jpg'
import hulk from '../images/tattos/hulk.jpg'
import neptuno from '../images/tattos/neptuno.jpg'
import odin from '../images/tattos/odin.jpg'
import serpiente from '../images/tattos/serpiente.jpg'
import thanos from '../images/tattos/thanos.jpg'
import ranacolor from '../images/tattos/rana-color.jpg'
import relojarena from '../images/tattos/relojarena.jpg'
import thor from '../images/tattos/thor.jpg'

import { openInstagramProfile } from '../services/instagram'

import '../styles/TattoGallery.css'
import { useEffect, useState } from 'react'

export function TattoGallery(){

    const [expandedImageUrl, setExpandedImageUrl] = useState('')

    useEffect(() => {
        openTatto()
    }, [expandedImageUrl])

    const openTatto = () => {
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
            <main >
                {expandedImageUrl && 
                <div className="modal" id="imageModal" onClick={() => setExpandedImageUrl('')} >
                    <img id="modalImage" src={null} alt="Imagen ampliada"></img>
                </div>}
                <ul className='tatto-leaf'>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(zeus)} alt="zeus" src={zeus}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(chicana)} alt="Chicana" src={chicana}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(ojoscatrina)} alt="Ojos Catrina" src={ojoscatrina}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(hulk)} alt="Hulk" src={hulk}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(neptuno)} alt="neptuno" src={neptuno}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(odin)} alt="odin" src={odin}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(serpiente)} alt="serpiente" src={serpiente}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(thanos)} alt="thanos" src={thanos}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(relojarena)} alt="relojarena" src={relojarena}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(thor)} alt="thor" src={thor}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(anubis)} alt="anubis" src={anubis}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(golondrina)} alt="golondrina" src={golondrina}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(horus)} alt="horus" src={horus}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(muerte)} alt="muerte" src={muerte}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(jordan)} alt="jordan" src={jordan}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(asturiasmadrid)} alt="asturiasmadrid" src={asturiasmadrid}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(atenas)} alt="atenas" src={atenas}></img>
                    </li>
                    <li className='tatto'>
                        <img onClick={() => setExpandedImageUrl(ranacolor)} alt="ranacolor" src={ranacolor}></img>
                    </li>
                    <li>
                    </li>
                </ul>
            </main>
            <footer>
                <div className='more-tatto'>
                    <button onClick={openInstagramProfile} className='more-tatto-button'>MAS TATUAJES</button>
                </div>
            </footer>
        </div>
        </>
    )
}