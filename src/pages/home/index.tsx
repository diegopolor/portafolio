import { stars } from './stylesStars'
import { HomeMenu } from './menu'
import planetImg from '../../assets/planeta.svg'
import './styles.css'


export const Home = ()=> {

    return(
        <div className='portada'>
            <div className='contenedor'>
                {stars.map((item, index) => (
                        <div 
                            key={index * 234} 
                            style={item} 
                            className="estrella"
                        ></div>
                ))}
                <div className="fugaz"></div> 
                <div className="portada-content">
                    <div>
                        <h1 className="portada-titulo">DIEGO POLO R.</h1>
                        <p className="portada-parrafo">
                        <i className="fa-thin fa-atom-simple"></i>Desarrollador Front-End</p>
                        <p className="portada-parrafo"> 
                            <i className="fas fa-map-marker-alt"></i> Medellín, Colombia.
                        </p>
                        <HomeMenu />
                    </div> 
                    <img className='portada-img' src={planetImg} alt="" />   
                </div>
              
            </div>
        </div>
        
    )
}

