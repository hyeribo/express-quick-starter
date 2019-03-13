const express = require('express');
const router = express.Router();

const getPosts = require('./getPosts');

router.get('/posts', getPosts);

module.exports = router;