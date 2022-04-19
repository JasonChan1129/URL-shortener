const express = require('express');

const URL = require('../../models/url');
const createRandomCode = require('../../createRandomCode');

const router = express.Router();

// handle post a url
router.post('/', async (req, res) => {
	try {
		const url = req.body.url;
		const origin = req.headers.origin;
		console.log(origin);
		let exists;
		let randomCode;
		// find if the corresponding url already exists in database
		const data = await URL.findOne({ URL: url }).lean();
		// if exists, get the data and pass it to view templete
		// if not yet exists, create a new shorten url and store it back to the database
		if (data) {
			return res.render('index', { data: { ...data, origin } });
		} else {
			// make sure the new shorten url does not repeat
			do {
				randomCode = createRandomCode(5);
				// return a document if at least one document matches the given params, otherwise return null
				exists = await URL.exists({ randomCode });
			} while (exists);
			await URL.create({ URL: url, randomCode });
			return res.render('index', { data: { URL: url, randomCode, origin } });
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
