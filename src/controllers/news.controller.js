const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

module.exports.topHeadlines = function topHeadlines(req, res) {
  return newsapi.v2.topHeadlines({
    sources: req.query.sources,
    q: req.query.q,
    category: req.query.category,
    language: 'en',
    country: 'us'
  }).then(response => {
    return res.json(response);
  });
};