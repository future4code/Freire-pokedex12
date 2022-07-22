import styled from "styled-components";

export const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    border-bottom: 1px solid black;
    padding: 0 30px;
    & img {
        transform: scale(0.85);
    }
`;