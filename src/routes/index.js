const express = require('express');
const router = express.Router();

const newsController = require('../controllers/news.controller');

router.get('/', (req, res) => {
  res.json({ route: 'Index' });
});

router.get('/news', newsController.topHeadlines);

module.exports = router;
