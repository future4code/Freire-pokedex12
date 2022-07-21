import { Cabecalho } from './styles';
import pokemonLogo from '../../img/pokemon-logo.png';

export function Header() {
    return(
        <Cabecalho>
            <button>&#10094; Todos Pokémons</button>
            <img src={pokemonLogo} alt="Logo Pokemon" />
            <button>Pokédex</button>
        </Cabecalho>
    );
}