import { version } from '../../package.json';
import { Router } from 'express';
//import facets from './facets';
import user from './user';

module.exports = function(config, db){
	let api = Router();

	// mount the user resource
	api.use('/user', user(config, db));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
