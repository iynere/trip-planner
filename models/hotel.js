var Sequelize = require('sequelize');
var db = require('./index');

var Hotel = db.define('hotel', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  amenities: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true
  }
})

module.exports = Hotel;
