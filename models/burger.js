var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    create: function() {

    },
    update: function() {

    }
};