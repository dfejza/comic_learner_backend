

export default ({ config, db }) => {
    
    var router = require('express').Router();

    router.get('/', function(req, res) {
        res.json({'foo':'bar'});
    });

    // POST /signup
    router.post('/addCard', function (req, res) {
        // handle a post request to this route
        console.log("post");
        res.sendStatus(200);
    });

    // GET /signup/info
    router.get('/info', function (req, res) {
        // handle a get request to this route
        console.log("get info");
        res.sendStatus(200);
    });

    return router;
}