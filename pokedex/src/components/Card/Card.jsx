import { CardPokemon, Informacao, NomePokemon, NumeroPokemon, TipoPokemon, ImagemPokemon, Botoes, ImagemPokebolaFundo } from "./styles";
import { tiposPokemon } from '../../constants/types';
import { LabelType } from "../LabelType/LabelType";
import fundoPokebola from '../../img/fundopokebola.png';

export const Card = (props) => {

    const listaTipos = props.tipo.map((tipo) => {
        return <LabelType tipo={tipo.type}/>
    })

    const tipoEscolhido = tiposPokemon.filter((tipo) => {
        return tipo.nome === props.tipo[0].type;
    });

    return(
        <CardPokemon corCard={tipoEscolhido[0].corCard}>
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