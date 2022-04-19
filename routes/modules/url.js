const express = require('express');

const URL = require('../../models/url');
const createRandomCode = require('../../createRandomCode');

const router = express.Router();

router.post('/', (req, res) => {
	const url = req.body.url;
	let randomCode = '';
	URL.find({ URL: url })
		.lean()
		.then(data => {
			if (data.length) {
				randomCode = data[0].randomCode;
				res.render('index', { data: { URL: url, randomCode } });
			} else {
				randomCode = createRandomCode();
				URL.create({ URL: url, randomCode })
					.then(() => res.render('index', { data: { URL: url, randomCode } }))
					.catch(error => console.log(error));
			}
		})
		.catch(error => console.log(error));
});

module.exports = router;
