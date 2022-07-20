import styled from 'styled-components';

export const CardPokemon = styled.div`
    background-color: #729F92;
    width: 440px;
    height: 210px;
    border-radius: 12px;
    padding: 15px;
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Informacao = styled.div`
    display: flex;
    flex-direction: column;
`

export const NumeroPokemon = styled.div`
    font-size: 16px;
    font-weight: bold;
`

export const NomePokemon = styled.div`
    font-size: 26px;
    font-weight: bold;
`

export const TipoPokemon = styled.div`
    display: flex;
    gap: 6px;
    margin-top: 10px;
`

export const ImagemPokemon = styled.img`
    width: 193px;
    height: 193px;
    position: absolute;
    top: -50px;
    left: 232px;

`
export const ImagemPokebolaFundo = styled.img`
    transform: scale(0.95);
    opacity: 0.6;
    position: absolute;
    left: 180px;
    top: -4px;
`

export const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`