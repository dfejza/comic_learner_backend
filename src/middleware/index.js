import { Router } from 'express';
import * as admin from 'firebase-admin';

export default ({ config, db, firebaseAdmin }) => {
	let routes = Router();

	// Validate the user token here on all api requests
	routes.use(function(req, res, next) {
		// Validate the user
		var idToken = req.body.idToken;
		//console.log(idToken);
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
	});

	return routes;
}
