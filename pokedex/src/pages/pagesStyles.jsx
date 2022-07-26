import styled from "styled-components";

export const DivCardsPokemons = styled.div`
    display: flex;
    margin-top: 30px;
    padding: 20px 50px;
    gap: 60px;
    flex-wrap: wrap;
    justify-content: center;
    & > img {
        height: 400px;
        border-radius: 10px;
    }
`;

export const BodyPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #5E5E5E;
    padding: 150px 30px 30px 40px;
    & h1 {
        color: white;
    }
`;

export const DivPagination = styled.div`
    opacity: 0;
    width: 100%;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5) );
    //box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    /* backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px); */
    padding: 16px;
    position: fixed;
    bottom: 0px;
    top: auto;
    z-index: 10;
    transition: 0.2s;
    &:hover {
        opacity: 1;
    }
`

export const DivErrorPage = styled.div`
    display: flex;
    & img {
        margin: auto;
        border-radius: 15px;

    }
`