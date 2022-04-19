function createRandomCode(randomCodeLength) {
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
	for (let i = 0; i < randomCodeLength; i++) {
		const randomIndex = Math.floor(Math.random() * collectionsLength);
		randomCode += collections[randomIndex];
	}
	return randomCode;
}

module.exports = createRandomCode;
