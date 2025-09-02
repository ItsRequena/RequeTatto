import fotoPerfil from '../images/fotoPerfil.jpg'
import '../styles/Main.css'

export function Main(){
    return (
        <>
            <div className='mainMenu'>
                <img></img>
                <img className='fotoPerfil' alt="Foto del perfil de reque.tattoo" src={fotoPerfil}></img>
                <h1 className='fuente'> Sergio Requena</h1>
                <p>Tatuador joven con amplia experiencia en realismo, especializado en capturar con precisión cada detalle y dotar a sus obras de un acabado natural y expresivo</p>
                <iframe className='googleMaps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.394088346714!2d-3.756039899999999!3d40.333603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189befb20fd87%3A0xbb5c41c7ba33f275!2sZONA%20ZERO%20TATTOO%20%26%20PIERCING!5e0!3m2!1ses!2ses!4v1756841530749!5m2!1ses!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p>C. de la Rioja, 28, 28915 Leganés, Madrid</p>

            </div>
        </>
    )
}