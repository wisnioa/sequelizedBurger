var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(cols, vals, cb){
    orm.delete("burgers", cols, vals   , function(res){
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;


module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
    text: {
      type: DataTypes.STRING,
      
      allowNull: false
      
    },
    devoured: {
      type: DataTypes.BOOLEAN,
    
      defaultValue: false
    }
  });
  return burger;
};