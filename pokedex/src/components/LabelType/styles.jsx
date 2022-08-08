import styled from "styled-components";

export const Etiqueta = styled.div`
    background-color: ${(props) => props.corFundo};
    width: fit-content;
    padding: 4px 8px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    border-radius: 8px;
    border: 1px dashed rgba(255, 255, 255, 0.47);
`