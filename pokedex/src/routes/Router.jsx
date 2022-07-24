import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from '../pages/DetailsPage';
import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';
import { ErrorPage } from '../pages/ErrorPage';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={ <Home/> }/>
                <Route path='pokedex' element={ <Pokedex/> } />
                <Route path='details/:id' element={ <DetailsPage/> } />
                <Route path='*' element={ <ErrorPage/> } />
            </Routes>
        </BrowserRouter>
    );
}