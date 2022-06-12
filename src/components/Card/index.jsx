import React from "react";
import {
  CardBody,
  CardBtn,
  CardImg,
  CardPrice,
  CardTitle,
  CardWrapper,
} from "./style";

const Card = (props) => {
  return (
    <CardWrapper>
      <CardImg src={props.img} alt={props.imgAlt} />
      <CardBody>
        <CardTitle>{props.titulo}</CardTitle>
        <CardPrice>{props.preco.toFixed(2)}</CardPrice>
        <CardBtn href={props.linkCompra} target="_blank">
          Comprar Online
        </CardBtn>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
