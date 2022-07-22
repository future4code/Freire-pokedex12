import styled from "styled-components";

export const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid black;
    padding: 10px 30px;
    & img {
        transform: scale(0.85);
    }
    & div:first-child {
        justify-content: flex-start;
    }
    & div:last-child {
        justify-content: flex-end;
    }
`;

export const ContainerBotao = styled.div`
    display: flex;
    width: 200px;
    
`;

export const BotaoHeader= styled.button`
    display: ${(props) => props.mostrar ? 'block' : 'none'};
`;