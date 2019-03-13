const express = require('express');
const router = express.Router();

const signIn = require('./signIn');

router.post('/auth/signIn', signIn);

module.exports = router;