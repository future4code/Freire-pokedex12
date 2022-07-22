import { Cabecalho, ContainerBotao, BotaoHeader } from './styles';
import pokemonLogo from '../../img/pokemon-logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
    
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

    let mostraBotaoTodos = '';
    let mostraBotaoPokedex = '';
    let mostraBotaoExcluir = '';

    switch(location.pathname) {
        case '/pokedex':
            mostraBotaoTodos = true;
            mostraBotaoPokedex = false;
            mostraBotaoExcluir = false;
            break;
        case '/details':
            mostraBotaoTodos = true;
            mostraBotaoPokedex = false;
            mostraBotaoExcluir = true;
            break;
        case '/': 
            mostraBotaoTodos = false;
            mostraBotaoPokedex = true;
            mostraBotaoExcluir = false;
            break;
        default:
            mostraBotaoTodos = false;
            mostraBotaoPokedex = true;
            mostraBotaoExcluir = false;
            break;
    }
    
    return(
        <Cabecalho>
            <ContainerBotao>
                <BotaoHeader mostrar={mostraBotaoTodos} onClick={goToHome}>&#10094; <u>Todos Pokémons</u></BotaoHeader>
            </ContainerBotao>
            <img src={pokemonLogo} alt="Logo Pokemon" />
            <ContainerBotao>
                <BotaoHeader mostrar={mostraBotaoPokedex} onClick={goToPokedex}>Pokédex</BotaoHeader>
                <BotaoHeader mostrar={mostraBotaoExcluir}>Excluir Pokémon</BotaoHeader>
            </ContainerBotao>            
        </Cabecalho>
    );
}