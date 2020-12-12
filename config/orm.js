var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(value) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES ('?')";
        connection.query(queryString, value, function(err,result) {
            if (err) throw err;
            console.log(Value + " added successfully");
            console.log(result);
        });
    },
    updateOne: function()
}