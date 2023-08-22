import React from "react";
import {
  ContainerPostagem,
  Title,
  Image,
  Description,
} from "./TelaDaPostagem.styled";

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      <Title>{props.titulo}</Title>
      <Image src={props.imagem} />
      <Description>{props.descricao}</Description>
      <Description>{props.autor}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;

// https://picsum.photos/536/354
