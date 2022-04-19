const express = require('express');

const URL = require('../../models/url');
const createRandomCode = require('../../createRandomCode');

const router = express.Router();

router.post('/', (req, res) => {
	const url = req.body.url;
	URL.findOne({ URL: url })
		.lean()
		.then(data => {
			if (data) {
				res.render('index', { data });
			} else {
				const randomCode = createRandomCode();
				URL.create({ URL: url, randomCode })
					.then(() => res.render('index', { data: { URL: url, randomCode } }))
					.catch(error => console.log(error));
			}
		})
		.catch(error => console.log(error));
});

module.exports = router;
