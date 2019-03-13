const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// config
const config = require('./config');

// middlewares
const logger = require('./middleware/logger');
const authMiddleware = require('./middleware/auth');

// routes
const auth = require('./routes/auth');
const users = require('./routes/users');
const posts = require('./routes/posts');


// use middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger);
app.use(authMiddleware);

app.use(morgan('dev'));

app.set('jwt-secret', config.jwt_secret);

// 라우터
app.use('/', auth);
app.use('/', users);
app.use('/', posts);

const server = app.listen(3000, () => {
  console.log('Express server has started on port 3000');
})

app.get('/', (req, res) => {
  res.send('Hello! GET request to the server.');
});

app.post('/', (req, res) => {
  res.send('Hello! POST request to the server.');
});

// 에러처리 핸들러
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).send({ message: err.message });
});