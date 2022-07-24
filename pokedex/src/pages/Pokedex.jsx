import { useContext } from "react";
import { Header } from "../components/Header/Header";
import { PokedexContext } from "../globalState/PokedexContext";
import { BodyPage, DivCardsPokemons } from "./pagesStyles";
import { Card } from "../components/Card/Card";
import goCatchEmAll from "../img/go-catch-em-all.png";

export default function Pokedex () {

    const {pokedex, excluirPokemon} = useContext(PokedexContext);

    const meusPokemons = pokedex.map((pokemon) => {
        return <Card key={pokemon} url={`https://pokeapi.co/api/v2/pokemon/${pokemon}`} excluirPokemon={excluirPokemon} />
    })

    return <div>
        <Header/>
        <BodyPage>
            <h1>Meus Pokémons</h1>
            <DivCardsPokemons>
                {meusPokemons.length === 0 ? <img src={goCatchEmAll} alt={`Go catch 'em all !`}></img> : meusPokemons}
            </DivCardsPokemons>
        </BodyPage>
    </div>
}
