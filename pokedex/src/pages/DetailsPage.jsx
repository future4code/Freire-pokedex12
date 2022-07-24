import { CardDetalhes } from "../components/CardDetalhes/CardDetalhes";
import { Header } from "../components/Header/Header";
import { BodyPage } from "./pagesStyles";

export default function DetailsPage () {
    return (
    <div>
        <Header/>
        <BodyPage>
            <h1>Detalhes</h1>
            <CardDetalhes/>
        </BodyPage>
    </div>
    )
}
