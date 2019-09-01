var express = require('express');
var router = express.Router();
var models = require('../models/burgers');

router.get("/", function(req, res) {
    res.render("index");
});

router.get('/api/burgers', function(req, res) {
    models.allBurgers(function(result) {
        res.send(result);
    });
})

router.post('/api/burgers/new', function(req, res) {
    console.log('this is req.body');
    console.log(req.body.newBurger);

    models.createBurger(req.body.newBurger, function(result) {
        res.send(result);
    });
})

router.post('/api/burgers/eat', function(req, res) {
    console.log(req.body.toUpdate);
    let condition = "id=" + req.body.updateID;

    models.updateBurger(req.body.toUpdate, condition, function(result) {
        res.send(result);
    });
})

module.exports = router;