import { useState } from 'react'

import './styles.css'

import { itemsMenu } from '../../config/menuItems';
import { NavbarItem } from './navbarItem';

export const Navbar = ()=> {
    const [ openMobile, setOpenMobile ] = useState<boolean>(false)
    
    const openMobileHandler = ()=> {
        setOpenMobile(!openMobile)
    }

    return(
        <div className="menu">
            {itemsMenu.map(item =>  
                <NavbarItem key={item.name} type="desktop" item={item} />
            )}
            <i onClick={openMobileHandler} className="fas fa-bars menu-boton"></i>  
            {openMobile &&  
                <div className="menu-mobil">
                    {itemsMenu.map(item =>  
                        <NavbarItem  key={item.name} type="mobile" item={item} />
                    )}
                </div>
            }
        </div>
 )
}