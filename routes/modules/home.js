const express = require('express');

const URL = require('../../models/url');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/:randomCode', (req, res) => {
	const { randomCode } = req.params;
	URL.findOne({ randomCode: randomCode })
		.lean()
		.then(data => res.redirect(data.URL))
		.catch(error => console.log(error));
});

module.exports = router;
