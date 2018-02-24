const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const {sqlEnv} = require('./env');
module.exports = callback => {

	// Set up the ORM to connect to SQL server
	// non-production credentials
	const sequelize = new Sequelize(sqlEnv.DATABASE_NAME, sqlEnv.DATABASE_USERNAME, sqlEnv.DATABASE_PASSWORD, {
		dialect: sqlEnv.DATABASE_DIALECT,
		define: {
		  underscored: true
		}
	  });

	// Connect all the models/tables in the database to a db object,
	//so everything is accessible via one object
	const db = {};
	db.Sequelize = Sequelize;
	db.sequelize = sequelize;
	// State all models, in this case just flashcards (possibly users as well in the future)
	db.flashcards = require('./models/flashcards.js')(sequelize, Sequelize);
	db.flashcards.removeAttribute('id');

	// Test the connection
	sequelize
		.authenticate()
		.then(() => {
		console.log('Connection has been established successfully.');
		})
		.catch(err => {
		console.error('Unable to connect to the database:', err);
		});
	

	callback(db);
}
