import { useEffect, useState } from "react";
import { PokedexContext } from "./PokedexContext";

export const PokedexProvider = (props) => {

    const [pokedex, setPokedex] = useState([]);

    const capturarPokemon = (pokemonID) => {
        const localPokedex = localStorage.getItem('pokedex') && JSON.parse(localStorage.getItem('pokedex'));
        const pokedexAtualizada = [...localPokedex, pokemonID];
        const pokedexString = JSON.stringify(pokedexAtualizada);
        localStorage.setItem('pokedex', pokedexString);
        setPokedex(JSON.parse(localStorage.getItem('pokedex')));
    }

    const excluirPokemon = (pokemonID) => {
        const localPokedex = JSON.parse(localStorage.getItem('pokedex'));
        const pokedexAtualizada = localPokedex.filter((pokemon) => {
            return pokemon !== pokemonID
        });
        const pokedexString = JSON.stringify(pokedexAtualizada);
        localStorage.setItem('pokedex', pokedexString);
        setPokedex(JSON.parse(localStorage.getItem('pokedex')));
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