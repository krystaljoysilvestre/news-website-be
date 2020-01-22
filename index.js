const express = require('express');

const app = express();

require('dotenv').config();

const index = require('./src/routes/index');

app.use('/api', index);

app.use((req, res, next) => {
  next({
    message: 'Not Found',
    status: 404,
  });
});

app.use((err, req, res, next) => {
  const error = {
    status: err.status || 500,
    message: err.message || 'Server Error',
  };

  res.json(error);
});

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));