import { CardPokemon, Informacao, NomePokemon, NumeroPokemon, TipoPokemon, ImagemPokemon, DivBotoes, BotaoAcao, ImagemPokebolaFundo } from "./styles";
import { tiposPokemon } from '../../constants/types';
import { LabelType } from "../LabelType/LabelType";
import fundoPokebola from '../../img/fundopokebola.png';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import PokeballLoader from "../PokeballLoader/PokeballLoader";
import { Button } from "@mui/material";

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
    const mostraOuEsconde = (mostrar) => {
        if (mostrar === true) {
            return 'inline';
        }
        if (mostrar === false) {
            return 'none';
        }
    }
    
    // Navegação entre páginas
    const navigate = useNavigate();

    const goToDetails = (id) => {
        navigate(`/details/${id}`);
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
        return <LabelType tipo={tipo.type.name} key={tipo.type.name} />
    })

    const tipoEscolhido = pokemon && lista && listaTipos && tiposPokemon.filter((tipo) => {
        return tipo.nome.toLowerCase() === lista[0].type.name;
    });
    
    const carregouTudo = pokemon && lista && listaTipos && tipoEscolhido;

    return(
        <div>
        {carregouTudo ?
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
                <Button 
                    variant="text"
                    onClick={() => goToDetails(pokemon.id)}
                    sx={{
                        textTransform: 'capitalize',
                        textDecoration: 'underline',
                        minWidth: '100px',
                        maxWidth: '100px',
                        color: 'white',
                        backgroundColor: '#ffffff22'
                    }}
                    >Detalhes
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => props.capturarPokemon(pokemon.id)}
                    sx={{
                        display: mostraOuEsconde(mostraCapturar),
                        textTransform: 'capitalize',
                        minWidth: '100px',
                        maxWidth: '100px',
                        backgroundColor: 'white',
                        color: 'black',
                        border: 'none',
                        '&:hover': {
                            border: 'none',
                            backgroundColor: '#eeeeee',
                        }
                    }}
                    >Capturar!
                </Button>
                <Button
                    variant="contained"
                    onClick={() => props.excluirPokemon(pokemon.id)}
                    color='error'
                    sx={{
                        display: mostraOuEsconde(mostraExcluir),
                        textTransform: 'capitalize',
                        minWidth: '100px',
                        maxWidth: '100px',
                    }}
                    >Excluir
                </Button>
            </DivBotoes>
        </CardPokemon> :
        <PokeballLoader/>
        }
        </div>
    )
}