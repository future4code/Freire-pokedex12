import styled, { keyframes } from "styled-components";

const twitching = keyframes`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(-20deg) translateX(-9px) translateY(-3px);
    }
    50% {
        transform: rotate(0deg);  
    }
    75% {
        transform: rotate(20deg) translateX(9px) translateY(-3px);
    }
    100% {
        transform: rotate(0deg);
    }
`;

const blinking = keyframes`
    0% {
        background-color: #bdbdbd;
        box-shadow: 0px 0px 2px 2px #888888;
    }
    50% {
        background-color: #ff0000;
        box-shadow: 0px 0px 8px 5px #ff0000;
    }
    100% {
        background-color: #bdbdbd;
        box-shadow: 0px 0px 2px 2px #888888;
    }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BallShape = styled.div`
  border: 1px solid black;
  height: 63px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  animation: ${twitching} 1.2s linear infinite;
`;

export const Pokeball = styled.div`
  background-image: linear-gradient(#fb9898, #ff0033);
  width: 60px;
  height: 30px;
  border-bottom: 2px solid black;
  position: relative;
  &::before {
    content: "";
    background-image: linear-gradient(#eeeeee, #a7a7a7);
    width: 60px;
    height: 30px;
    position: absolute;
    top: 30px;
    border-top: 2px solid black;
  }
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: white;
    border: 3px solid black;
    border-radius: 50%;
    position: absolute;
    top: 23px;
    left: 23px;
  }
`;

export const Blinker = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #bdbdbd;
    position: absolute;
    top: 28px;
    left: 28px;
    animation: ${blinking} 0.6s linear infinite;
`;
