// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
// CONFIG
// ============================================================
var config = require('./config');
// INITILIZE APP
// ============================================================
var app = module.exports = express();
// INITILIZE DEPENDENCIES
// ============================================================
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
// MASSIVE SETUP
// ============================================================
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
   connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');
// CONTROLLERS
// ============================================================
var productCtrl = require('./controllers/productCtrl');
// ENDPOINTS
// ============================================================
// TABLE ENDPOINTS
app.get('/api/products', productCtrl.read);
app.get('/api/products/:id', productCtrl.readOne)
app.post('/api/products', productCtrl.create);
app.put('/api/products/:id', productCtrl.update);
app.delete('/api/products/:id', productCtrl.delete);
// LISTEN
// ============================================================
var port = config.PORT;
app.listen(port, function() {
  console.log('listening on port ', port);
});
