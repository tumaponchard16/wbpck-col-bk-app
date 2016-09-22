// Set NODE_PATH directory
module.paths.push("./src");

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('server/routes');

var PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
routes(app);

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});
