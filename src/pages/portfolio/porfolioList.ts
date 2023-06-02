import todoList from '../../assets/todoList.png'
import cartshop from '../../assets/cartshop.png'
import animal from '../../assets/animal.png'

import { PortfolioItem } from '../../interfaces'

export const portfolioList: PortfolioItem[] = [
    {
        name: 'Todo List',
        tecnologie: 'Angular',
        url: 'https://todolistdpr.netlify.app',
        img: todoList
    },
    {
        name: 'Cart Shop',
        tecnologie: 'Angular',
        url: 'https://cartshop-dpr.netlify.app',
        img: cartshop
    },
    {
        name: 'Animal',
        tecnologie: 'Angular',
        url: 'https://animal-dpr.netlify.app/',
        img: animal
    }  
]