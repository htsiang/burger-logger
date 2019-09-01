var express = require('express');
var router = express.Router();
var models = require('../models/burgers');

router.get("/", function(req, res) {
    res.render("index");
});

router.post('/api/newBurger', function(req, res) {
    
})

module.exports = router;