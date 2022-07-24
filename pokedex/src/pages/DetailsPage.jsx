import { CardDetalhes } from "../components/CardDetalhes/CardDetalhes";
import { Header } from "../components/Header/Header";
import { BodyPage } from "./pagesStyles";
import { useContext } from "react";
import { PokedexContext } from "../globalState/PokedexContext";

export default function DetailsPage () {

    const {pokedex, excluirPokemon} = useContext(PokedexContext);

    return (
    <div>
        <Header/>
        <BodyPage>
            <h1>Detalhes</h1>
            <CardDetalhes excluirPokemon={excluirPokemon} pokedex={pokedex} />
        </BodyPage>
    </div>
    )
}
