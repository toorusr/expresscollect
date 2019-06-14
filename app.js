// MIT license
// @toorusr, https://max.berlin
// Express Collector

const port = 1338 // server port

var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// collector
var collector = require('./collector')

//  / => collector.js
app.use('/', collector)

// missleading route handling
app.all('*', function(req, res){
    res.send('Here is nothing more than a 404.')
});

// listen to port
app.listen(port, () => console.log(`\n---\nListening on port ${port}!\n---\n`))
