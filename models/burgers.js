var orm = require('../config/orm');

var burgers = {
    allBurgers: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        });
    },
    updateBurger: function(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function(res) {
            cb(res)
        });
    },
    // cb should be an array input
    createBurger: function(values, cb) {
        orm.create("burgers", ['burger'], values, function(res) {
            cb(res);
        });
    }
}

module.exports = burgers;