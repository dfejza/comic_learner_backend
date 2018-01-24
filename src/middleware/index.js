import { Router } from 'express';

export default ({ config, db }) => {
	let routes = Router();

	// // Validate the user token here on all api requests
	// routes.use(function(req, res, next) {
	// 	// do validation on name here
	// 	// blah blah validation
	// 	// log something so we know its working
	// 	console.log('doing name validations on ');
	// 	if("user string" === "googles string"){
	// 		res.sendStatus(400);
	// 	}
	// 	else{
	// 		// go to the next thing
	// 		next(); 
	// 	}
	// });

	return routes;
}
