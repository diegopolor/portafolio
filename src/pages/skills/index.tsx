import { Navbar } from '../../components/navbar'

import './styles.css'
import { skillList } from './skillList'

export const Skills = ()=> ( 
    <>
        <Navbar />
        <div className='content transition-all'>
            <h2>Habilidades</h2>

            <div className='content-skills'>  
            { skillList.map(skill => (
                <div key={skill.name}>   
                    <img loading='lazy' className='images-skills' src={skill.img} alt={skill.name} />
                    <p className='name-skill' style={{textAlign: 'center' }}>{ skill.name}</p>
                </div>
            )) }
                     
            </div>
        </div>
    </>

)