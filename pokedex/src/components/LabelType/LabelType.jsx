import { tiposPokemon } from '../../constants/types';
import { Etiqueta } from './styles';

export const LabelType = (props) => {
    const tipoEscolhido = tiposPokemon.filter((tipo) => {
        return tipo.nome === props.tipo;
    });

    return (
        <Etiqueta corFundo={tipoEscolhido[0].corEtiqueta}>
            <img src={tipoEscolhido[0].icone} />
            <span>{tipoEscolhido[0].nome}</span>
        </Etiqueta>
    )
}