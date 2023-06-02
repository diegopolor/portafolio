import { Link } from 'react-router-dom';
import './styles.css'

import { itemsMenu } from '../../config/menuItems';

export const HomeMenu  = ()=> {

    return(
        <nav className='home-menu'>
            { itemsMenu.map(item => {
                if(item.name === itemsMenu[0].name) return
                return(
                    <Link 
                        key={item.name}
                        className='home-menu-item' 
                        style={{ color: 'white' }} 
                        to={item.path}
                    >
                        { item.name }
                    </Link>
                )}          
            )}
        </nav>
    )
}