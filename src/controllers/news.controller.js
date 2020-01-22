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

export default {
  topHeadlines
}