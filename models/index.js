var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner');
module.exports = db;

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

