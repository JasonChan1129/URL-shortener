const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const URLSchema = new Schema({
	randomCode: {
		type: String,
		require: true,
	},
	URL: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model('URL', URLSchema);
