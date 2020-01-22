import NewsAPI from 'newsapi';

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const topHeadlines = (params) => {
  return newsapi.v2.topHeadlines({
    sources: '',
    q: '',
    category: '',
    language: 'en',
    country: 'us'
  }).then(response => {
    // console.log(response);
    return res.json(response);
  });
};

export default {
  topHeadlines
}
