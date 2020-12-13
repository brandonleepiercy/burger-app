var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(value, cb) {
        orm.insertOne(value, function(res) {
            cb(res);
        })
    },
    updateOne: function(condition, cb) {
        orm.updateOne(condition, function(res) {
            cb(res);
        }) 
    }
};

module.exports = burger;