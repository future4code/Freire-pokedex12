import { CardDetalhesPokemon, ImagemPokebolaFundoDetalhes, ImagemPokemonDetalhes, MetadeCard, ListaSprites, Stats, Moves, LabelMove } from "./styles";
import { Informacao, NumeroPokemon, NomePokemon, TipoPokemon } from '../Card/styles';
import fundoPokebola from '../../img/fundo-pokeball-detalhes.png';
import { tiposPokemon } from "../../constants/types";
import { LabelType } from "../LabelType/LabelType";
import { useParams } from "react-router-dom";
import { URL_Base } from "../../constants/URL_Base";
import axios from "axios";
import { useState, useEffect } from "react";
import PokeballLoader from "../PokeballLoader/PokeballLoader";

export const CardDetalhes = (props) => {

    const pathparams = useParams();

    const id = pathparams.id

    const [pokemonDetalhado, setPokemonDetalhado] = useState({})

    const getPokemonDetalhado = () => {
        axios.get(`${URL_Base}${id}`).then((response) => {
            setPokemonDetalhado(response.data)
    }).catch((error) => {
        console.log(error.message)
    })
    }

    useEffect(() => {
        getPokemonDetalhado()
    }, [id])
    
    const lista = pokemonDetalhado && pokemonDetalhado.types;
    const listaTipos = pokemonDetalhado && lista && lista.map((tipo) => {
        return <LabelType tipo={tipo.type.name} key={tipo.type.name}/>
    })
    const tipoEscolhido = pokemonDetalhado && lista && listaTipos && tiposPokemon.filter((tipo) => {
        return tipo.nome.toLowerCase() === lista[0].type.name;
    });
    
    const stats = pokemonDetalhado && pokemonDetalhado.stats;
    let totalStats = 0
    const listaStats = pokemonDetalhado && stats && stats.map((stat) => {
        totalStats += stat.base_stat;
        return <li key={stat.stat.name}>
            <span>{stat.stat.name.charAt(0).toUpperCase()+stat.stat.name.slice(1)}</span>
            <span>{stat.base_stat}</span>
        </li>
    })

    let moves = pokemonDetalhado && pokemonDetalhado.moves;
    const listaMoves = pokemonDetalhado && moves && moves.filter((move, indice) => {
        return indice < 5
    }).map((move) => {
        return <LabelMove key={move.move.name}>{move.move.name.charAt(0).toUpperCase()+move.move.name.slice(1)}</LabelMove>
    }) 

    const carregouTudo = pokemonDetalhado && lista && listaTipos && tipoEscolhido;
    
    return(
        <div>
            {carregouTudo ?
            <CardDetalhesPokemon corCard={tipoEscolhido[0].corCard}>
                <ImagemPokebolaFundoDetalhes src={fundoPokebola}/>
                <ImagemPokemonDetalhes src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
                <MetadeCard>
                    <ListaSprites>
                        <li><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/></li>
                        <li><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}/></li>
                    </ListaSprites>
                    <Stats>
                        <h2>Base Stats</h2>
                        <ul>
                            {listaStats}
                            <li><span>Total</span><span>{totalStats}</span></li>
                        </ul>
                    </Stats>
                </MetadeCard>
                <MetadeCard>
                    <Informacao>
                        <NumeroPokemon>#{id}</NumeroPokemon>
                        <NomePokemon>{pokemonDetalhado.name.charAt(0).toUpperCase()+pokemonDetalhado.name.slice(1)}</NomePokemon>
                        <TipoPokemon>
                            {listaTipos}
                        </TipoPokemon>
                    </Informacao>
                    <Moves>
                        <h2>Moves</h2>
                        {listaMoves}
                    </Moves>
                </MetadeCard>
            </CardDetalhesPokemon> :
            <PokeballLoader/>
            }
        </div>
    )
}