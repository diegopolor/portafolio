import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { Skills } from '../pages/skills'
import { Portfolio } from '../pages/portfolio'
import { ContactMe } from '../pages/contactMe'

export const AppRouter = ()=> (
    <BrowserRouter>
        <Routes>
            <Route 
                path=''
                element={<Home />}
            />
            <Route 
                path='skills'
                element={<Skills />}
            />
            <Route 
                path='portfolio'
                element={<Portfolio />}
            />
            <Route 
                path='contact'
                element={<ContactMe />}
            />
            <Route 
                path='*'
                element={<h1>404</h1>}
            />
        </Routes>
    </BrowserRouter>
)