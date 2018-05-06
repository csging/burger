const connection = require('../config/connection.js');
// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });
var orm = {
    selectAll: function(what, where) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [what, where], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(what, where, move) {
        var queryString = "SELECT ?? FROM ?? INSERT INTO ?? ";
        connection.query(queryString, [what, where, move], function(err, res) {
            if (err) throw err
            console.log(res)
        });
    },
    updateOne: function(what, where) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [what, where], function(err, res) {
            if (err) throw err
            console.log(res)
        });
    },

};
module.exports = orm;