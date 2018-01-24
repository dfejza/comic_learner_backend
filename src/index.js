import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';
import mysql from 'mysql';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));



// connect to db
initializeDb( db => {

	// Connect to SQL
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'teltech',
		password : 'teltech',
		database : 'comiclearner'
	  });

	// internal middleware
	app.use(middleware({ config, db }));

	// api router
	app.use('/api', api({ config, db }));

	app.server.listen(process.env.PORT || config.port, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});
});

export default app;


/*
CREATE TABLE cards (
	userId VARCHAR(50) NOT NULL,
	front VARCHAR(250) NOT NULL,
	back blob NOT NULL,
	created DATETIME NOT NULL,
	intervalModifier SMALLINT NOT NULL,
	numlapses SMALLINT NOT NULL,
	numReviews SMALLINT NOT NULL,
	due_date date NOT NULL,
	PRIMARY KEY (userId, created)
);
*/
