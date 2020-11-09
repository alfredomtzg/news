const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c2ecb11b02de4bffb9d3b2b679a51f72', { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});