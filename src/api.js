const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9103665cf0df40789a6d3c1d22e5c69b', { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

newsapi.v2.topHeadlines({
  category: 'business',
  country: 'us'
}).then(response => {
  console.log(response);
});

