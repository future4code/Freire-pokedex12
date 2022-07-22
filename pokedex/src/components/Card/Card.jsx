import { CardPokemon, Informacao, NomePokemon, NumeroPokemon, TipoPokemon, ImagemPokemon, Botoes, ImagemPokebolaFundo } from "./styles";
import { tiposPokemon } from '../../constants/types';
import { LabelType } from "../LabelType/LabelType";
import fundoPokebola from '../../img/fundopokebola.png';
import { useRequestPokemon } from "../../hooks/useRequestPokemon";
import axios from "axios";
import { useEffect, useState } from "react";
import PokeballLoader from "../PokeballLoader/PokeballLoader";


//numero={'01'} tipo={[{type: 'Steel'}, {type: 'Poison'}]} imagem={bulbaImagem}

export const Card = (props) => {

    const [pokemon, setPokemon] = useState({})

    const getPokemon = () => {
        axios.get(props.url).then((response) => {
        setPokemon(response.data)
        console.log(response.data)
    }).catch((error) => {
        console.log(error.message)
    })
    }

    useEffect(() => {
        getPokemon()
    }, [props.url])
    
    console.log(pokemon)
    console.log(pokemon.types)

    const lista = pokemon && pokemon.types

    console.log(lista)

    // Criar uma variavel para receber a lista pokemon.types

    const listaTipos = pokemon && lista && lista.map((tipo) => {
        return <LabelType tipo={tipo.type.name}/>
    })

    console.log(listaTipos) 

    const tipoEscolhido = pokemon && lista && listaTipos && tiposPokemon.filter((tipo) => {
        return tipo.nome.toLowerCase() === lista[0].type.name;
    });

    console.log(tipoEscolhido)
    
    
    return(
        <div>
        {pokemon && lista && listaTipos && tipoEscolhido &&
        <CardPokemon corCard={tipoEscolhido[0].corCard}>
            <Informacao>
                <NumeroPokemon>#{pokemon.id}</NumeroPokemon>
                <NomePokemon>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</NomePokemon>
                <TipoPokemon>
                    {listaTipos}
                </TipoPokemon>
            </Informacao>

            <ImagemPokebolaFundo src={fundoPokebola} />
            <ImagemPokemon src={pokemon.sprites.other['official-artwork'].front_default} />
            

            <Botoes>
                <button>Detalhes</button>
                <button>Capturar</button>
            </Botoes>
        </CardPokemon>}
        </div>
    )
}