import styled from "styled-components";

export const CardDetalhesPokemon = styled.div`
    position: relative;
    display: flex;
    padding: 20px 30px;
    background-color: ${(props) => props.corCard};
    border-radius: 25px;
    width: 1200px;
    height: 500px;
    margin: 30px auto 0 auto;
    gap: 30px;
`;

export const MetadeCard = styled.div`
    width: 50%;
    display: flex;
    gap: 25px;
    z-index: 1;
    color: white;
    text-shadow: 0px 0px 6px #000000;
`;

export const ListaSprites = styled.ul`
    width: 50%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: 20px;
    height: 100%;
    & li {
        border-radius: 10px;
        border-top: 1px solid lightgray;
        border-left: 1px solid lightgray;
        background-color: rgba(212, 212, 212, 0.351);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        & img {
            transform: scale(2.0);
        }
    }
`;

export const Stats = styled.div`
    border-radius: 10px;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgray;
    background-color: rgba(212, 212, 212, 0.351);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 50%;
    padding: 20px;
    & h2 {
        margin-bottom: 15px;
    }
    & ul {
        list-style: none;
        & li {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #eeeeeec9;
            width: 100%;
            gap: 10px;
        }
        & li:last-child {
            font-weight: bold;
            margin-top: 10px;
            border: none;
        }
    }
`;

export const DivInfoMoves = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`;

export const Moves = styled.div`
    border-radius: 10px;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgray;
    background-color: rgba(212, 212, 212, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & h2 {
        margin-bottom: 10px;
    }
`;

export const LabelMove = styled.div`
    background-color: #a9a9a967;
    width: fit-content;
    padding: 4px 8px;
    border-radius: 8px;
    border: 1px dashed rgba(255, 255, 255, 0.47);
`;

export const DivBotaoExcluir = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 50px;
`;

export const ImagemPokemonDetalhes = styled.img`
    width: 250px;
    height: 250px;
    position: absolute;
    top: -100px;
    right: 30px;
    z-index: 2;

`;

export const ImagemPokebolaFundoDetalhes = styled.img`
    height: 500px;
    opacity: 0.6;
    position: absolute;
    left: auto;
    right: 0px;
    top: -2px;
    z-index: 0;
`;