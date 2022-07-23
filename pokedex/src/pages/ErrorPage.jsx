import { BodyPage, DivErrorPage } from "./pagesStyles";
import missingno from '../img/error-page-img.png';
import { Header } from "../components/Header/Header";

export const ErrorPage = () => {
    return(
        <div>
        <Header/>
        <BodyPage>
        <DivErrorPage>
            <img src={missingno} alt='Mensagem de erro. Página não encontrada.' />
        </DivErrorPage>
        </BodyPage>
        </div>
    )
}