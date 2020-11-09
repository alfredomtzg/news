import React from "react";
// Style
import { CardNewContainer, ImgCard, DescriptionContainer } from "../Style";
import Img from "../../assets/image.png";

export default function CardNew({
  title = "Como crecer en la industria",
  urlToImage = Img,
  author = "Alfredo",
  publishedAt = "30/11/1990",
  url = "https://www.linkedin.com/in/alfredo-mart%C3%ADnez-garc%C3%ADa/",
  description = "lorem impsus",
}) {
  return (
    <CardNewContainer>
      <a href={url} target="_blank" rel="noreferrer">
        <ImgCard src={urlToImage} alt="Image news" />
      </a>

      <DescriptionContainer>
        <h5> {title.substr(0, 30)} </h5>
        <h6> Publicado: {publishedAt.substr(0, 10)} </h6>
        <p>{description}</p>
        <p>por {author}</p>
      </DescriptionContainer>
    </CardNewContainer>
  );
}
