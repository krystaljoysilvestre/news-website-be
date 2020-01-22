import NewsAPI from 'newsapi';

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const topHeadlines = (params) => {
  return newsapi.v2.topHeadlines(params);
};

export default {
  topHeadlines
}
