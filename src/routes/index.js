import express from 'express';
import NewsController from '../controllers/news.controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ route: 'Index' });
});

router.get('/news', NewsController.topHeadlines);
router.get('/sources', NewsController.sources);

module.exports = router;
