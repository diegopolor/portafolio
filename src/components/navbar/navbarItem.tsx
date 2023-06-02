import { NavLink } from 'react-router-dom';
import { ActiveRoute, ItemMenu } from '../../interfaces'
import { itemsMenu } from '../../config/menuItems'
import planetImg from '../../assets/planeta.svg'

interface Props {
    item: ItemMenu,
    type: 'desktop' | 'mobile'
}

export const NavbarItem = ({ item, type }: Props)=> {

    const itemsClass = type === 'desktop' ? 'menu-item' : 'menu-mobil_item'
    const itemsClassActive = type === 'desktop' ? 'menu-item-active' : 'menu-mobil_active'

    const isActive = ({ isActive }: ActiveRoute ) => (
        isActive ? itemsClassActive : itemsClass
    )

    if(item.name === itemsMenu[1].name){
        return (
            <>
                <NavLink 
                    key={item.name} 
                    className ={ isActive } 
                    to={item.path}
                > 
                    {item.name}
                </NavLink> 
                { type === 'desktop' && 
                    <img  
                        className = "menu-img" 
                        src={planetImg} 
                        alt="icon-logo" 
                    />
                }
            </>
        )
    } 
    return (
        <NavLink 
            key={item.name} 
            className ={ isActive } 
            to={item.path}
        > 
            {item.name}
        </NavLink> 
    )
    
}