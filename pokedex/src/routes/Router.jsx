import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from '../pages/DetailsPage';
import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={ <Home/> }/>
                <Route path='pokedex' element={ <Pokedex/> } />
                <Route path='details' element={ <DetailsPage/> } />
            </Routes>
        </BrowserRouter>
    );
}