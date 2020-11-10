import React, { useState, useContext, useEffect } from "react";
//Style
import { SelectInput, MainContainer, NewsContainer } from "../Style";
// ComponentCardNew
import CardNew from "../CardNew";
import { Context } from "../../utils/Context";
import "../../api";

export default function News() {
  const { APIKEY } = useContext(Context);
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    contry: "mx",
    category: "tecnology",
  });

  const hangleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const URL = `https://newsapi.org/v2/top-headlines?country=${values.contry}&category=${values.category}&apiKey=${APIKEY}`;

  const bringNews = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    bringNews();
    console.log("UseEffect");
  }, [values]);
  return (
    <MainContainer>
      <form>
        <SelectInput name="contry" id="contry" onChange={hangleChange}>
          <option value="mx">Mexico</option>
          <option value="au">Australia</option>
          <option value="us">USA</option>
          <option value="ar">Argentina</option>
          <option value="at">Austria</option>
          <option value="be">Belgium</option>
          <option value="br">Brazil</option>
          <option value="bg">Bulgaria</option>
          <option value="ca">Canada</option>
          <option value="co">Colombia</option>
        </SelectInput>

        <SelectInput id="category" name="category" onChange={hangleChange}>
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
        </SelectInput>
      </form>

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
