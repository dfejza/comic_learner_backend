




module.exports = ( config, db ) =>{
    var router = require('express').Router();

    router.get('/', function(req, res) {
        res.json({'foo':'bar'});
    });

    // Add the card to the DB
    router.post('/addCard', function (req, res) {
        // TODO sanitize the input

        // Add the input to the DB
        db.flashcards.create({
            user_id: req.body.idToken,
            front: req.body.front,
            back: req.body.back,
            manga : req.body.manga,
            volume : req.body.volume,
            page : req.body.page,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            interval_modifier: 1,
            num_lapses: 0,
            numm_reviews: 0,
            due_date: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }).
        then(newCard => {
            res.json(newCard);
        }, err =>{
            console.log(err);
            res.json(err);
        });
    });

    // Get all cards from the DB
    router.get('/getAllCards', function (req, res) {
        // TODO sanitize the input
        db.flashcards.findAll({
            where: {
                user_id : req.body.idToken
            }
        }).then(cards => {
            res.json(cards);
        }, err =>{
            console.log(err);
            res.json(err);
        });
    });

    // Delete specified cards from the DB
    router.post('/deleteCards', function (req, res) {
        console.log(req.body.deleteArray);
        // TODO sanitize the input
        db.flashcards.destroy({
            where: {
                user_id : req.body.idToken,
                created_at : req.body.deleteArray
            }
        }).then(cards => {
            res.json(cards);
        }, err =>{
            console.log(err);
            res.json(err);
        });

    });

    // GET /signup/info
    router.get('/info', function (req, res) {
        // handle a get request to this route
        console.log("get info");
        res.sendStatus(200);
    });

    return router;
}