const Sequelize = require('sequelize');
const sequelize = new Sequelize('movie_list', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

exports.Movie = sequelize.define('movie', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  img_source: {
    type: Sequelize.STRING
  },
  to_watch: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});