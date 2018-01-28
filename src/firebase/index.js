import * as admin from 'firebase-admin';
import { firebaseEnv } from "./../env.js"
var serviceAccount = require("./../../../cred.json");



export default () => {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://website-7c6ec.firebaseio.com"
    });

	return admin;
}
