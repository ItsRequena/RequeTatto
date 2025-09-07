import { useContext } from 'react'
import fotoPerfil from '../images/fotoPerfil.jpg'
import chicana from '../images/tattos/chicana.jpg'
import ojoscatrina from '../images/tattos/ojoscatrina.jpg'
import { openInstagram } from '../services/openInstagram'
import { openMail } from '../services/openMail'
import '../styles/Main.css'
import { OptionContext } from '../context/option.jsx'

export function Main(){
    const {isMenuOpen} = useContext(OptionContext)

    return (
        <>
        <div className='mainMenu'>
            <img className='fotoPerfil' alt="Foto del perfil de reque.tattoo" src={fotoPerfil}></img>
            <h2 className='fuente'> Sergio Requena</h2>
            <div>
                <p>Tatuador joven con amplia experiencia en realismo, especializado en capturar con precisión cada detalle y dotar a sus obras de un acabado natural y expresivo</p>
                <br></br>
                <div className='tattocover'>
                    <img className='imgPortada' alt="Tatuaje portada 1" src={chicana}></img>
                    <img className='imgPortada' alt="Tatuaje portada 2" src={ojoscatrina}></img>
                </div>
            </div>

            <h2 className='fuente'>Contacto </h2>
            <div className='contact-box'>
                <ul className='ul-contact'>
                    <li className='li-contact' >
                        <svg onClick={openInstagram} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30px" height="30px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"/><stop offset=".328" stopColor="#ff543f"/><stop offset=".348" stopColor="#fc5245"/><stop offset=".504" stopColor="#e64771"/><stop offset=".643" stopColor="#d53e91"/><stop offset=".761" stopColor="#cc39a4"/><stop offset=".841" stopColor="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"/><stop offset=".999" stopColor="#4168c9" stopOpacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
                        <p onClick={openInstagram}>reque.tattoo</p> 
                    </li>
                    <li className='li-contact' >
                        <svg onClick={openMail} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="28px" height="28px"><path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/></svg>
                        <p onClick={openMail}>requetatto@gmail.com</p>
                    </li>
                </ul>
            </div>
            
            <h2 className='fuente'>Ubicación </h2>
            <div>
                <iframe className='googleMaps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.394088346714!2d-3.756039899999999!3d40.333603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189befb20fd87%3A0xbb5c41c7ba33f275!2sZONA%20ZERO%20TATTOO%20%26%20PIERCING!5e0!3m2!1ses!2ses!4v1756841530749!5m2!1ses!2ses" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <p>C. de la Rioja, 28, 28915 Leganés, Madrid</p>
            </div>

        </div>
        </>
    )
}