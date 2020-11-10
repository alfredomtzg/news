const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c2ecb11b02de4bffb9d3b2b679a51f72');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

export const APIKEY = 'c2ecb11b02de4bffb9d3b2b679a51f72'

export const HeadApi = (contry) => {
  const url =
    `https://newsapi.org/v2/top-headlines?country=${contry}&apiKey=${APIKEY}`;


  var req = new Request(url);

  fetch(req)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.articles);

    })
    .catch((err) => {
      console.log(err);
    });

}