import { useEffect, useState } from "react";
import { PokedexContext } from "./PokedexContext";
import Swal from 'sweetalert2';

export const PokedexProvider = (props) => {

    const [pokedex, setPokedex] = useState([]);

    const capturarPokemon = (pokemonID) => {
        const localPokedex = localStorage.getItem('pokedex') && JSON.parse(localStorage.getItem('pokedex'));
        const pokedexAtualizada = [...localPokedex, pokemonID];
        const pokedexString = JSON.stringify(pokedexAtualizada);
        localStorage.setItem('pokedex', pokedexString);
        setPokedex(JSON.parse(localStorage.getItem('pokedex')));
        Swal.fire({
            title: '<strong>Gotcha!</strong>',
            html: 'O Pokémon foi adicionado a sua Pokédex',
            timer: 1000,
            showConfirmButton: false,
            padding: '60px 10px',
        });
    }

    const excluirPokemon = (pokemonID) => {
        const localPokedex = JSON.parse(localStorage.getItem('pokedex'));
        const pokedexAtualizada = localPokedex.filter((pokemon) => {
            return pokemon !== pokemonID
        });
        const pokedexString = JSON.stringify(pokedexAtualizada);
        localStorage.setItem('pokedex', pokedexString);
        setPokedex(JSON.parse(localStorage.getItem('pokedex')));
        Swal.fire({
            title: '<strong>Oh, no!</strong>',
            html: 'O Pokémon foi removido da sua Pokédex',
            timer: 1000,
            showConfirmButton: false,
            padding: '60px 10px'
        });
    }

    useEffect(() => {
        if (!(localStorage.getItem('pokedex'))) {
            localStorage.setItem('pokedex', JSON.stringify([]));
        } else {
            setPokedex(JSON.parse(localStorage.getItem('pokedex')));
        }
        console.log(JSON.parse(localStorage.getItem('pokedex')));
    }, [pokedex.length]);

    
    return <PokedexContext.Provider value={{pokedex, setPokedex, capturarPokemon, excluirPokemon}}>
        {props.children}
    </PokedexContext.Provider>
}