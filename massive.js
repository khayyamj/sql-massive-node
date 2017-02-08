const massive = require('massive');
const connectionString = ('postgres://postgres:postgres@localhost/Products');
var massiveInstance = massive.connectSync({connectionString : connectionString});

module.exports = massiveInstance;
