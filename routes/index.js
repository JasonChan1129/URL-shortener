const express = require('express');

const home = require('./modules/home');
const url = require('./modules/url');

const router = express.Router();

router.use('/', home);
router.use('/url', url);

module.exports = router;
