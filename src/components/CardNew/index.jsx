import React from "react";
// Style
import { CardNewContainer, ImgCard } from "../Style";
import Img from "../../assets/image.png";

export default function CardNew(props) {
  return (
    <CardNewContainer>
      <ImgCard src={Img} alt="Image news" />
      <h5>Lo ultimo en desarrollo web</h5>
      <h6>Publicado el 30 de noviembre</h6>
      <p>
        Como llegar en htm <br /> por Renata
      </p>
    </CardNewContainer>
  );
}
