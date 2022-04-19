const express = require('express');

const URL = require('../../models/url');

const router = express.Router();

// handle index page
router.get('/', (req, res) => {
	res.render('index');
});

// handle redirect shorten url to full url
router.get('/:randomCode', (req, res) => {
	const { randomCode } = req.params;
	URL.findOne({ randomCode: randomCode })
		.lean()
		.then(data => res.redirect(data.URL))
		.catch(error => console.log(error));
});

module.exports = router;
