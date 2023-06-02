import { PortfolioItem } from '../../interfaces/index'

import angularLogo from '../../assets/angular.png'

interface Props {
    item: PortfolioItem
}

interface Logos {
    [key: string]: string,
    Angular: string
}


const logos: Logos = {
    'Angular': angularLogo
}

export const PortfolioItems = ({ item }: Props) => {
    return(
        <div className='portoflio-item'>
            <h3 className='title-item'>{ item.name }</h3> 
            <img className='image-portfolio' width={500} src={item.img} alt={item.name}></img> 
            <div className='text-porfolio'>      
                <p>   
                    <img loading='lazy' width={30} alt='angular' src={logos[item.tecnologie]}></img>
                </p>   
                <a  target='_blank' href={item.url}> 
                    <button className='btn'> Ver completo </button>
                </a>  
            </div>             
         </div>
    )
}