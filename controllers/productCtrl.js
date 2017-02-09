// REQUIRE DEPENDENCIES
// ============================================================
var app = require('./../index');
var db = app.get('db');
// Init Table if doesn't exist
db.init.createTable([],function(err, results) {
   if(err) {
      console.error(err);
   }
   else {
      console.log("Initialized Product Table");
   }

})
// EXPORT METHODS
// ============================================================
module.exports = {
  // CRUD METHODS
  // ============================================================
  read: function(req, res) {
    db.read_products([], function(err, table){
      if (err) {
        console.log('read_products: ', err);
        return res.status(500).send(err);
      }
      res.status(200).send(table);
    });
  },
  readOne: function(req, res) {
    db.read_product([req.params.id], function(err, table){
      if (err) {
        console.log('read_products: ', err);
        return res.status(500).send(err);
      }
      res.status(200).send(table[0]);
    });
  },
  create: function(req, res) {
    db.create_product([
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageUrl
   ], function(err, table){
      if (err) {
        console.log('create_product: ', err);
        return res.status(500).send(err);
      }
      console.log('Create Product object: ', req.body)
      res.status(200).send(table[0]);
    });
  },
  update: function(req, res) {
    db.update_product([
      req.params.id,
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageUrl],
      function(err, table){
      if (err) {
        console.log('update_product: ', err);
        return res.status(500).send(err);
      }
      console.log('Update function (backend) object: ', req.body)
      res.status(200).json(table[0]);
    });
  },
  delete: function(req, res) {
    db.delete_product([req.params.id], function(err, table){
      if (err) {
        console.log('delete_product: ', err);
        return res.status(500).send(err);
      }
      res.status(200).send(table[0].name + " has been deleted.");
    });
  }
  // OTHER METHODS
  // ============================================================

};
