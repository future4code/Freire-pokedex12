import { useState } from "react";
import { PokedexContext } from "./PokedexContext";

export const PokedexProvider = (props) => {

    const [pokedex, setPokedex] = useState([]);

    const capturarPokemon = (pokemonID) => {
        const pokedexAtualizada = [...pokedex, pokemonID];
        setPokedex(pokedexAtualizada);
    }

    const excluirPokemon = (pokemonID) => {
        const pokedexAtualizada = pokedex.filter((pokemon) => {
            return pokemon !== pokemonID
        });
        setPokedex(pokedexAtualizada);
    }

    return <PokedexContext.Provider value={{pokedex, setPokedex, capturarPokemon, excluirPokemon}}>
        {props.children}
    </PokedexContext.Provider>
}