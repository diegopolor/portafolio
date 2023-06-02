import { Navbar } from '../../components/navbar'
import { portfolioList } from './porfolioList'
import { PortfolioItems } from './portfolioItems'

import './styles.css'

export const Portfolio = ()=> (
    <>
        <Navbar /> 
        <div className='content'>
            <h1>Portafolio</h1>
            <div className='content-porfolio'>
            { portfolioList.map( item => (
                <PortfolioItems key={item.name} item={item} />      
            ) )}
            </div>


        </div>
       
    </> 
)