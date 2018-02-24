import { Router } from 'express';
import * as admin from 'firebase-admin';

module.exports = function(config, db, firebaseAdmin){
	let routes = Router();
	

	// Validate the user token here on all api requests
	routes.use(function(req, res, next) {

		// Validate the user
		// If POST, look for ID in body
		// If GET, look for ID in params
		var idToken = ( typeof req.body.idToken !== 'undefined' ? req.body.idToken : req.query.idToken );
		if(typeof idToken !== 'undefined'){
			admin.auth().verifyIdToken(idToken)
			.then(function(decodedToken) {
				var uid = decodedToken.uid;

				// Modify the uid to the decoded id
				req.body.idToken = uid;

				// Continue
				next(); 
			}).catch(function(error) {
				console.log(error);
				// Handle error TODO frontend
					res.status(500).send({ error: 'INVALID_TOKEN' })
			});
		}
		else{
			res.status(500).send({ error: 'INVALID_TOKEN' })
		}
	});

	return routes;
}
