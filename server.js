var express = require('express')
const path = require('path');
var app = express()

// The local port of the app
const port = '5000';

// Use this address to host index
app.use('/', function response(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// use /ingredients to host ingredients
app.use('/ingredients', function response(req, res) {
    res.sendFile(path.join(__dirname, 'ingredients.html'));
});

// use /recipe to host recipe
app.use('/recipe', function response(req, res) {
    res.sendFile(path.join(__dirname, 'recipe.html'));
});

app.use('/recipe/add', function response(req, res) {
    res.sendFile(path.join(__dirname, 'add-recipe.html'));
});

app.use(express.static('static'));


app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});