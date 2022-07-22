import { CardPokemon, Informacao, NomePokemon, NumeroPokemon, TipoPokemon, ImagemPokemon, DivBotoes, BotaoAcao, ImagemPokebolaFundo } from "./styles";
import { tiposPokemon } from '../../constants/types';
import { LabelType } from "../LabelType/LabelType";
import fundoPokebola from '../../img/fundopokebola.png';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import PokeballLoader from "../PokeballLoader/PokeballLoader";


//numero={'01'} tipo={[{type: 'Steel'}, {type: 'Poison'}]} imagem={bulbaImagem}

export const Card = (props) => {

    // Botão muda de acordo com a página
    const location = useLocation();
    let mostraCapturar = '';
    let mostraExcluir = '';

    switch(location.pathname) {
        case '/':
            mostraCapturar = true;
            mostraExcluir = false;
            break;
        case '/pokedex':
            mostraCapturar = false;
            mostraExcluir = true;
    }
    
    // Navegação entre páginas
    const navigate = useNavigate();

    const goToDetails = () => {
        navigate('/details');
    }

    // Dados do componente
    const [pokemon, setPokemon] = useState({})

    const getPokemon = () => {
        axios.get(props.url).then((response) => {
        setPokemon(response.data)
    }).catch((error) => {
        console.log(error.message)
    })
    }

    useEffect(() => {
        getPokemon()
    }, [props.url])

    const lista = pokemon && pokemon.types

    const listaTipos = pokemon && lista && lista.map((tipo) => {
        return <LabelType tipo={tipo.type.name}/>
    })

    const tipoEscolhido = pokemon && lista && listaTipos && tiposPokemon.filter((tipo) => {
        return tipo.nome.toLowerCase() === lista[0].type.name;
    });
    
    
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
            <ImagemPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
            

            <DivBotoes>
                <button onClick={goToDetails}>Detalhes</button>
                <BotaoAcao mostrar={mostraCapturar} onClick={() => props.capturarPokemon(pokemon.id)}>Capturar</BotaoAcao>
                <BotaoAcao mostrar={mostraExcluir} onClick={() => props.excluirPokemon(pokemon.id)}>Excluir</BotaoAcao>
            </DivBotoes>
        </CardPokemon>}
        </div>
    )
}