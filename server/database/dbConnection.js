const mysql = require('mysql');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('movie_list', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

exports.connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movie_list'
});

exports.connectDB = () => {
	exports.connection.connect((err) => {
		if(err) {
			console.log('error connecting DB', err);
		}
		console.log('connected to DB');
	});
}

exports.connectDB();


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