import styled from "styled-components";

export const CardWrapper = styled.div`
  box-shadow: 0 0 10px 5px #e1e5ee;
  border-radius: 0.2rem;
  min-width: 12rem;
  display: flex;
  @media (min-width: 600px) {
    flex-direction: column;
    text-align: center;
    min-width: 14rem;
    max-width: 15rem;
  }
`;
export const CardBody = styled.div`
  margin: 1rem;
  flex-grow: 1;
  flex-shrink: 1;
`;
export const CardImg = styled.img`
  width: 12rem;
  height: 10rem;
  object-fit: cover;
  flex-grow: 1;
  flex-shrink: 1;
  :hover {
    transform: scale(1.1);
  }
  @media (min-width: 600px) {
    width: 100%;
    height: 12rem;
  }
`;
export const CardTitle = styled.h2`
  font-family: "Fredoka One";
  line-height: 1.4rem;
  margin-bottom: 0.5rem;
  flex-grow: 1;
  flex-shrink: 1;
  @media (max-width: 600px) {
    line-height: 0.8rem;
    font-size: 0.9rem;
  }
`;

export const CardPrice = styled.h3`
  font-family: "Fredoka One";
  font-size: 1.4rem;
  margin-top: 0.6rem;
  color: #3e3e4f;
  flex-grow: 1;
  flex-shrink: 1;
  ::before {
    content: "R$";
    font-size: 0.6rem;
    position: relative;
    top: -0.3rem;
    padding-right: 0.1rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const CardBtn = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  border: none;
  border-top: 1px solid #e1e5ee;
  background-color: transparent;
  font-family: "Fredoka One";
  font-size: 1rem;
  color: inherit;
  width: 100%;
  padding-top: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  flex-grow: 1;
  flex-shrink: 1;
  :hover {
    color: #0e48fe;
  }
`;
