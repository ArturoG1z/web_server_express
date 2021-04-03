require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT;
// handlebars es para dinamismo rapido, reutilizar componentes basado en Mustache
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);
// Serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home', {
		title: 'Node course',
		username: 'Felipe Arturo'
	});
})

app.get('/generic', (req, res) => {
	res.render('generic', {
		title: 'Node course',
		username: 'Felipe Arturo',
		headerClass: 'alt'
	});
})

app.get('/elements', (req, res) => {
	res.render('elements', {
		title: 'Node course',
		username: 'Felipe Arturo',
		headerClass: 'alt'
	});
})

app.get('*', (req, res) => {
	res.render('404', {
		title: '404 | Not found',
		username: 'Felipe Arturo'
	});
});

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});