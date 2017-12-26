mysql = require('mysql');

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