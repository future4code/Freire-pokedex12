import { Cabecalho, ContainerBotao, BotaoHeader } from './styles';
import pokemonLogo from '../../img/pokemon-logo.png';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Button } from '@mui/material';


export function Header() {
    
    const pathParams = useParams();
    const id = pathParams.id;

    let location = useLocation();
    const navigate = useNavigate();

    const goToPokedex = () => {
        navigate('/pokedex');
    }
    const goToDetails = () => {
        navigate('/details');
    }

    const goToHome = () => {
        navigate('/');
    }

    let mostraBotaoTodos = false;
    let mostraBotaoPokedex = false;

    switch(location.pathname) {
        case '/pokedex':
            mostraBotaoTodos = true;
            mostraBotaoPokedex = false;
            break;
        case `/details/${id}`:
            mostraBotaoTodos = true;
            mostraBotaoPokedex = true;
            break;
        case '/': 
            mostraBotaoTodos = false;
            mostraBotaoPokedex = true;
            break;
        default:
            mostraBotaoTodos = true;
            mostraBotaoPokedex = true;
            break;
    }
    
    const mostraOuEsconde = (mostrar) => {
        if (mostrar === true) {
            return 'inline';
        }
        if (mostrar === false) {
            return 'none';
        }
    }

    return(
        <Cabecalho>
            <ContainerBotao>
            <Button
            variant='text'
            onClick={goToHome}
            sx={{
                display: mostraOuEsconde(mostraBotaoTodos),
                textTransform: 'capitalize',
                textDecoration: 'underline',
                color: 'black',
                minWidth: '200px',
                maxWidth: '200px'
            }}
            >&#10094; Todos Pokémons</Button>
            </ContainerBotao>
            <img src={pokemonLogo} alt="Logo Pokemon" />
            <ContainerBotao>
                <Button
                variant='contained'
                onClick={goToPokedex}
                sx={{
                    display: mostraOuEsconde(mostraBotaoPokedex),
                    textTransform: 'capitalize',
                    minWidth: '200px',
                    maxWidth: '200px'
                }}
                >Pokédex
                </Button>
                
            </ContainerBotao>            
        </Cabecalho>
    );
}