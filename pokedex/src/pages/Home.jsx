import { Pagination } from "@mui/material";
import { textAlign } from "@mui/system";
import { useContext, useState } from "react";
import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import PokeballLoader from "../components/PokeballLoader/PokeballLoader";
import { URL_Base } from "../constants/URL_Base";
import { PokedexContext } from "../globalState/PokedexContext";
import { useRequestData } from "../hooks/useRequestData";
import { DivCardsPokemons, DivPagination, BodyPage } from "./pagesStyles";


export default function Home () {

    const {pokedex, capturarPokemon} = useContext(PokedexContext);
    
    const [links, isLoadingLinks] = useRequestData(`${URL_Base}?limit=1200`);
    
    const listaPokemons = links && links.results.map((item, indice) => {
        return <Card key={indice} nome={item.name} url={item.url} capturarPokemon={capturarPokemon} pokedex={pokedex} />
    });

    //Paginação
    const itensPorPagina = 20;
    const [paginaAtual, setPaginaAtual] = useState(0);
    const numeroDePaginas = links && Math.ceil(links.results.length / itensPorPagina);
    const indiceInicio = paginaAtual * itensPorPagina;
    const indiceFinal = indiceInicio + itensPorPagina;
    const itensExibidos = links && listaPokemons && listaPokemons.slice(indiceInicio, indiceFinal);
    //FimPaginação

    console.log(Array(numeroDePaginas))

    document.title = 'Home';
    return <div>
        <Header/>
        <BodyPage>
        <h1>Todos Pokémons</h1>        
        <DivCardsPokemons>
            { isLoadingLinks ? <PokeballLoader/> : itensExibidos }
        </DivCardsPokemons>
        </BodyPage>
        <DivPagination>
          <Pagination
            shape="rounded"
            color='primary'
            count={numeroDePaginas} 
            boundaryCount={1}
            onChange={(event, page) => {
              setPaginaAtual(page - 1)
            }}
            sx={{
              width: 'fit-content',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '5px',
              borderRadius: '5px',
              margin: 'auto',
              backdropFilter: `blur(5px)`
            }}
          />
        </DivPagination>
    </div>
}
