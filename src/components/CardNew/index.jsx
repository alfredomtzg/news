import React from "react";
// Style
import { CardNewContainer, ImgCard } from "../Style";
import Img from "../../assets/image.png";

export default function CardNew(props) {
  return (
    <CardNewContainer>
      <ImgCard src={Img} alt="Image news" />
      card
    </CardNewContainer>
  );
}
