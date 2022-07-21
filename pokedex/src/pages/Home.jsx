import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import PokeballLoader from "../components/PokeballLoader/PokeballLoader";
import bulbaImagem from '../img/bulbasaur.png';

export default function Home () {

    return <div>
        <Header/>
        <p>Home</p>
        <Card nome={'Bulbasaur'} numero={'01'} tipo={[{type: 'Grass'}, {type: 'Poison'}]} imagem={bulbaImagem} />
        <br />
        <br />
        <br />
        <PokeballLoader/>
    </div>
}
