import NewsService from '../services/news.service';

const topHeadlines = (req, res) => {
  const { query } = req;
  return NewsService.topHeadlines(query)
    .then(response => {
      return res.json(response);
    })
    .catch(err => {
      console.log('Top Headlines Error: ', err);
      return res.status(500).json('Failed to retrieve top headlines')
    });
};

const sources = (req, res) => {
  const { query } = req;
  return NewsService.sources(query)
    .then(response => {
      return res.json(response);
    })
    .catch(err => {
      console.log('Sources Error: ', err);
      return res.status(500).json('Failed to retrieve sources')
    });
};

export default {
  topHeadlines,
  sources
}