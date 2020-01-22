const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const topHeadlines = (req, res) => {
  const { sources, q, category } = req.query;
  return newsapi.v2.topHeadlines({
    sources,
    q,
    category,
    language: 'en',
    country: 'us'
  }).then(response => {
    return res.json(response);
  });
};

export default {
  topHeadlines
}