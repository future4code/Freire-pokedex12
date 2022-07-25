import { useContext } from "react";
import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import PokeballLoader from "../components/PokeballLoader/PokeballLoader";
import { URL_Base } from "../constants/URL_Base";
import { PokedexContext } from "../globalState/PokedexContext";
import { useRequestData } from "../hooks/useRequestData";
import { DivCardsPokemons, BodyPage } from "./pagesStyles";

export default function Home () {

    const {pokedex, capturarPokemon} = useContext(PokedexContext)
    
    const [links, isLoadingLinks] = useRequestData(`${URL_Base}?limit=20`);
    
    const listaPokemons = links && links.results.map((item, indice) => {
        return <Card key={indice} nome={item.name} url={item.url} capturarPokemon={capturarPokemon} pokedex={pokedex} />
    });

    // const pokemons = listaLinks && listaLinks.map((link) => {
    //     const [pokemon, isLoadingPokemon] = useRequestData(link);
    //     console.log(pokemon)
    // })
    document.title = 'Home';
    return <div>
        <Header/>
        <BodyPage>
        <h1>Todos Pokémons</h1>
        <DivCardsPokemons>
            { isLoadingLinks ? <PokeballLoader/> : listaPokemons }
        </DivCardsPokemons>
        </BodyPage>
        
    </div>
}
