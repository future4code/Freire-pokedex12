import { Card } from "../components/Card/Card";
import bulbaImagem from '../img/bulbasaur.png';

export default function Home () {

    return <div>
        <p>Home</p>
        <Card nome={'Bulbasaur'} numero={'01'} tipo={[{type: 'Poison'}, {type: 'Grass'}]} imagem={bulbaImagem} />
    </div>
}
