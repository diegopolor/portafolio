import { Navbar } from '../../components/navbar'

import perfilImg from '../../assets/perfil.jfif' 
import cv from '../../assets/CV-DIEGOPOLOR.pdf'
import './styles.css'

export const ContactMe = ()=> {
    return (
        <>
            <Navbar />
            <div className='content'>
                <img className='photoPerfil' src={perfilImg} alt='perfil'></img>
                <h1 style={{ marginBottom: '20px' }}>Sobre mí</h1>
                <p className='parrafo'>Mi nombre es Diego Polo Rada y soy un desarrollador front-end con experiencia en Angular y React. A lo largo de mi carrera, he trabajado en diversos proyectos, involucrándome en todas las etapas del ciclo de desarrollo. Cada paso me ha permitido adquirir experiencia y habilidades para crear productos de alta calidad y cumplir con estándares exigentes.</p> 
                <p className='parrafo'>He tenido la oportunidad de trabajar en proyectos fullstack, lo que me ha brindado un amplio conocimiento en el entorno web, tanto en el desarrollo del lado del servidor como en el lado del cliente. Esta experiencia me ha permitido adquirir un entendimiento completo de todas las partes del proceso de desarrollo web.</p>
                <a href={cv} download='CV-DiegoPoloR'>
                <button className='btn-curriculum'>
                    Descargar Curriculum Vitae
                </button>
                </a>
   
            </div>

            
        </>
    )
}