const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const env = require('./env');
export default callback => {

	// Set up the ORM to connect to SQL server
	// non-production credentials
	const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
		dialect: env.DATABASE_DIALECT,
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
