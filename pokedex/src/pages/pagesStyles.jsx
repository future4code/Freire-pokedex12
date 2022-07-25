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

export const DivErrorPage = styled.div`
    display: flex;
    & img {
        margin: auto;
        border-radius: 15px;

    }
`