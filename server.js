var express = require('express')
//var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;
var router = require('./app/routes');

// EJS express layouts
app.set('view engine', 'ejs');
//app.use(expressLayouts);

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

// use routes file
var router = require('./app/routes');
app.use('/', router)

// set static files (css/images) location
app.use(express.static(__dirname + '/public'));


// start server
app.listen(port, function() {
    console.log('christian server')
})


