var Sequelize = require('sequelize');
var db = require('./index');

var Place = db.define('place', {

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull:false
  },
  phone: { ///need to change
    type: Sequelize.INTEGER,
    allowNull: false
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  }
})

module.exports = Place;
