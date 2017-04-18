var express = require('express')
const path = require('path');
var app = express()

// The local port of the app
const port = process.env.PORT || '5000';

app.use('/static', express.static(path.join(__dirname, 'static')));

// Use this address to host index
app.get('/', function response(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// use /ingredients to host ingredients
app.get('/ingredients', function response(req, res) {
    res.sendFile(path.join(__dirname, 'ingredients.html'));
});

// use /recipe to host recipe
app.get('/recipe', function response(req, res) {
    res.sendFile(path.join(__dirname, 'recipe.html'));
});

app.get('/recipe/add', function response(req, res) {
    res.sendFile(path.join(__dirname, 'add-recipe.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
