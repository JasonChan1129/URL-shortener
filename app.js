const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');

const app = express();

// setup mongodb connection
require('./configs/mongoose');

// setup view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is listening on localhost:${PORT}`));
