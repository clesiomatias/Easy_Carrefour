import styled, { keyframes } from "styled-components";
import InputMask from "react-input-mask";

const kAnimationDir = keyframes`
0%{opacity:0;margin-left:3000px; }
100%{opacity:1; margin-left: 0;}
`;
const kAnimationEsq = keyframes`
0%{opacity:0;margin-right:3000px; }
100%{opacity:1; margin-right: 0;}
`;
const kAnimationCen = keyframes`

0%{transform:scale(0);opacity:0;}
95%{transform:scale(1.1);opacity:1}
100%{scale:1;}
`;
const moveText = keyframes`
    0%{opacity:0; transform:scale(0);}
    95%{opacity:1;transform:scale(1.1);}
    100%{transform:scale(1);}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.h1`
  margin-top: 5vh;
  font-size: 5rem;
  font-family: "Fredoka One";
  animation-name: ${moveText};
  animation-duration: 0.75s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 3.2rem;
  }
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;
export const WrapperCentral = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CaixaDireita = styled.img`
  width: 20%;

  animation-name: ${kAnimationDir};
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
`;
export const CaixaCentro = styled.img`
  width: 20%;
  animation-name: ${kAnimationCen};
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
`;
export const CaixaEsquerda = styled.img`
  width: 20%;
  animation-name: ${kAnimationEsq};
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
`;
export const T1 = styled.h1`
  color: #920001;
  font-family: "Fredoka One";
  font-size: 1.5rem;
  position: absolute;
  margin-top: 10%;
  margin-right: 40%;
  animation-name: ${moveText};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 40%;
    margin-right: 55%;
    font-size: 1.3rem;
  }
  @media (min-width: 361px) and (max-width: 767px) {
    margin-top: 40%;
    font-size: 0.9rem;
    margin-right: 55%;
  }
  @media (max-width: 360px) {
    margin-top: 38%;
    margin-right: 50%;
    font-size: 0.8rem;
  }
`;
export const T2 = styled.h1`
  color: #022768;
  font-size: 1.5rem;
  font-family: "Fredoka One";
  position: absolute;
  margin-top: 6%;
  margin-right: 0%;
  animation-name: ${moveText};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 40%;
    font-size: 1.3rem;
  }
  @media (min-width: 361px) and (max-width: 767px) {
    margin-top: 40%;
    font-size: 0.9rem;
  }
  @media (max-width: 360px) {
    margin-top: 38%;
    font-size: 0.8rem;
  }
`;
export const T3 = styled.h1`
  color: #920001;
  font-size: 1.5rem;
  font-family: "Fredoka One";
  position: absolute;
  margin-top: 10%;
  margin-left: 40%;
  animation-name: ${moveText};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 40%;
    margin-left: 55%;
    font-size: 1.3rem;
  }
  @media (min-width: 361px) and (max-width: 767px) {
    margin-top: 40%;
    font-size: 0.9rem;
    margin-left: 55%;
  }
  @media (max-width: 360px) {
    margin-top: 38%;
    margin-left: 50%;
    font-size: 0.8rem;
  }
`;
export const LinkLogo = styled.a`
  position: absolute;
  margin: 18% 0 0 43%;
  img {
    width: 18%;
    :hover {
      transform: scale(1.2);
    }
  }
  animation-name: ${kAnimationCen};
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  @media (min-width: 768px) and (max-width: 1023px) {
  }
  img {
    width: 18%;
  }
  margin: 18% 0 0 43%;
  @media (min-width: 361px) and (max-width: 767px) {
    img {
      width: 26%;
    }
    margin: 18% 0 0 43%;
  }
  @media (max-width: 360px) {
    img {
      width: 25%;
    }
    margin: 18% 0 0 44%;
  }
`;
export const CaixaDeCep = styled.form`
  margin-top: 1%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 10%;
    width: 35%;
  }
  @media (min-width: 361px) and (max-width: 767px) {
    width: 50%;
    margin-top: 20%;
  }
  @media (max-width: 360px) {
    width: 50%;
    margin-top: 10%;
  }
`;
export const InputCep = styled(InputMask)`
  width: 100%;
  height: 2rem;
  font-family: "Fredoka One";
  font-size: 1rem;
  text-align: center;
  border-radius: 10%;
  :hover {
    background-color: #cecece;
    transform: scale(1.2);
  }
`;
export const BtnBusca = styled.button`
  width: 50%;
  margin-top: 10px;
  font-family: "Fredoka One";
  color: white;
  border-radius: 25%;
  background-color: #7f0102;
  :hover {
    transform: scale(1.1);
  }
`;
