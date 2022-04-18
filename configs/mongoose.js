const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.on('error', () => console.log('db error!'));

db.once('open', () => console.log('db connected!'));
