const express = require('express');
const router = express.Router();

const getUsers = require('./getUsers');
const getUser = require('./getUser');

router.get('/users', getUsers);
router.get('/users/:userId', getUser);

module.exports = router;