import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  overflow: hidden;
  @media (min-width: 120px) and (max-width: 767px) {
    max-width: 100vw;
  }
`;
export const CabecalhoWrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: #990c0c;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
`;
export const TipografiaCabecalho = styled.h1`
  position: absolute;
  font-family: "Fredoka One";
  font-size: 78px;
  color: white;
  margin-right: 10%;
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (min-width: 361px) and (max-width: 767px) {
    font-size: 28px;
    margin: 0 25% 20% 0;
  }
  @media (max-width: 360px) {
    font-size: 22px;
    margin: 0 25% 20% 0;
  }
`;
export const TipografiaCabecalho2 = styled.h3`
  font-family: "Fredoka One";
  font-weight: 100;
  text-align: center;
  color: #ffffff;
  margin-right: 10%;
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (min-width: 361px) and (max-width: 767px) {
    margin: 50px 36px 14px 0;
    position: absolute;
    font-size: 14px;
  }
  @media (max-width: 360px) {
    margin-top: 10%;
    font-size: 14px;
  }
`;
export const LinkLogo = styled.a`
  margin-left: 5%;
  img {
    width: 18%;
    :hover {
      transform: scale(1.2);
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    img {
      width: 18%;
    }
  }

  @media (min-width: 361px) and (max-width: 767px) {
    img {
      width: 50px;
      margin: 0 350px 50px 0;
    }
  }
  @media (max-width: 360px) {
    img {
      width: 75px;
    }
  }
`;
export const LoadingWrapper = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  h1 {
    font-family: "Fredoka One";
    font-size: 28px;
  }
  @media (min-width: 361px) and (max-width: 767px) {
    h1 {
      font-size: 14px;
    }
  }
  @media (max-width: 360px) {
    h1 {
      font-size: 12px;
    }
  }
`;
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: auto;
  height: auto;
  overflow: hidden;
  align-items: center;
  flex-wrap: nowrap;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
export const BarraDeTexto = styled.div`
  background-color: #02458c;
  margin: 1rem 0 1rem 0;
  width: 100%;
  height: 5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Fredoka One";
  font-size: 2rem;
  @media (min-width: 361px) and (max-width: 767px) {
    line-height: 1.5rem;
    text-align: center;
    font-size: 1.5rem;
  }
  @media (max-width: 360px) {
    line-height: 1.5rem;
    text-align: center;
    font-size: 1rem;
  } ;
`;
export const BarraLojasMaisDistantes = styled.div`
  background-color: #02458c;
  margin: 1rem 0 1rem 0;
  width: 100%;
  height: 5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Fredoka One";
  font-size: 2rem;
  @media (min-width: 361px) and (max-width: 767px) {
    line-height: 1.5rem;
    text-align: center;
    font-size: 1.5rem;
  }
  @media (max-width: 360px) {
    line-height: 1.5rem;
    text-align: center;
    font-size: 1rem;
  } ;
`;
