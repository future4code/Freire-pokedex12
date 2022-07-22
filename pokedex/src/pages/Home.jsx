import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import PokeballLoader from "../components/PokeballLoader/PokeballLoader";
import { URL_Base } from "../constants/URL_Base";
import { useRequestData } from "../hooks/useRequestData";
import bulbaImagem from '../img/bulbasaur.png';
import { DivCardsPokemons, BodyHome } from "./pagesStyles";

export default function Home () {

    const [links, isLoadingLinks] = useRequestData(`${URL_Base}?limit=18`);
    
    const listaPokemons = links && links.results.map((item, indice) => {
        return <Card key={indice} nome={item.name} url={item.url} />
    });

    // const pokemons = listaLinks && listaLinks.map((link) => {
    //     const [pokemon, isLoadingPokemon] = useRequestData(link);
    //     console.log(pokemon)
    // })

    return <div>
        <Header/>
        <BodyHome>
        <h1>Todos Pokémons</h1>
        <DivCardsPokemons>
            {listaPokemons}
        </DivCardsPokemons>
        </BodyHome>
        
    </div>
}
