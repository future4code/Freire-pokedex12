import styled from "styled-components";

export const Cabecalho = styled.div`
    position: fixed;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 0px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 10px 30px;
    z-index: 10;
    & img {
        transform: scale(0.85);
        height: 100px;
        cursor: pointer;
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