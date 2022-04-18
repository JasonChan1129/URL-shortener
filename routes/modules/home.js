const express = require('express');

const URL = require('../../models/url');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.post('/url', (req, res) => {
	const url = req.body.url;
	let randomCode = '';
	URL.find({ URL: url })
		.lean()
		.then(data => {
			if (data.length) {
				randomCode = data.randomCode;
				console.log(randomCode);
			} else {
				randomCode = createRandomCode();
				URL.create({ URL: url, randomCode });
			}
		});
	// find corresponding randomCode in mongoDB
	// if found, return the randomCode
	// if not found, create a randomCode, insert data to mongoDB
	// render index with the randomCode
});

function createRandomCode() {
	const upperCase = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];
	const lowerCase = upperCase.map(item => item.toLowerCase());
	const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const collections = [...upperCase, ...lowerCase, ...number];
	const collectionsLength = collections.length;
	let randomCode = '';
	const randomCodeLength = 5;
	for (let i = 0; i < randomCodeLength; i++) {
		const randomIndex = Math.floor(Math.random() * collectionsLength);
		randomCode += collections[randomIndex];
	}
	return randomCode;
}

module.exports = router;
