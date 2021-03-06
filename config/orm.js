var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(value, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, value, function(err,result) {
            if (err) throw err;
            console.log(value + " added successfully");
            cb(result);
        });
    },
    updateOne: function(condition, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE ?";
        connection.query(queryString, condition, function(err,result) {
            if (err) throw err;
            console.log("Burger "+condition+" set to devoured.");
            cb(result);
        });
    }
};

module.exports = orm;