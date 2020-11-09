import React, { useState } from "react";
//Style
import { SelectInput, MainContainer, NewsContainer } from "../Style";
// ComponentCardNew
import CardNew from "../CardNew";
import "../../api";

export default function News() {
  const [data, setData] = useState([]);
  const URL =
    "http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-09&sortBy=publishedAt&apiKey=c2ecb11b02de4bffb9d3b2b679a51f72";
  const bringNews = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContainer>
      <SelectInput
        id="contry"
        name="contry"
        // value={props.valuesSignUp.gender}
        // onChange={props.handleChangeCreateUser}
      >
        <option defaultValue value="choose">
          Contry
        </option>
        <option value="male">Mexico</option>
        <option value="female">Colombia</option>
        <option value="other">USA</option>
      </SelectInput>

      <SelectInput
        id="category"
        name="category"
        // value={props.valuesSignUp.gender}
        // onChange={props.handleChangeCreateUser}
      >
        <option defaultValue value="choose">
          Category
        </option>
        <option value="male">Tec</option>
        <option value="female">Bitcoin</option>
      </SelectInput>
      <button
        onClick={() => {
          bringNews();
        }}
      >
        News
      </button>
      <NewsContainer>
        {data.map((item, index) => {
          return (
            <CardNew
              key={index}
              title={item.title}
              publishedAt={item.publishedAt}
              author={item.author}
              url={item.url}
              urlToImage={item.urlToImage}
              description={item.description}
            />
          );
        })}
      </NewsContainer>
    </MainContainer>
  );
}
