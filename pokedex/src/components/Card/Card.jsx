import { CardPokemon, Informacao, NomePokemon, NumeroPokemon, TipoPokemon, ImagemPokemon, Botoes, ImagemPokebolaFundo } from "./styles";
import bulbasauro from '../../img/bulbasaur.png';
import fundoPokebola from '../../img/fundopokebola.png';

export const Card = (props) => {

    const listaTipos = props.tipo.map((tipo) => {
        return <li>{tipo.type}</li>
    })

    return(
        <CardPokemon>
            <Informacao>
                <NumeroPokemon>#{props.numero}</NumeroPokemon>
                <NomePokemon>{props.nome}</NomePokemon>
                <TipoPokemon>
                    {listaTipos}
                </TipoPokemon>
            </Informacao>

            <ImagemPokebolaFundo src={fundoPokebola} />
            <ImagemPokemon src={props.imagem} />
            

            <Botoes>
                <button>Detalhes</button>
                <button>Capturar</button>
            </Botoes>
        </CardPokemon>
    )
}