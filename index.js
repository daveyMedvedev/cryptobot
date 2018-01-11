var express = require('express'),
    app = express(),
    port = process.env.PORT || 3400;

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/botRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('CoinBot API Started On: ' + port);