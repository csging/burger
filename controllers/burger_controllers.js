const express = require("express");
const burger = require("./../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    // res.redirect('/index');
    console.log("wooooooorrrrrkkkk")
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.redirect("/");
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition: ", condition);

    burger.update({
            devoured: true
        },
        condition,
        function(res) {
            if (err) { return res.status(404).end() } else if (res.changedRows === 0) { return res.status(404).end() }
            res.status(200).end();
        });
});

router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    connection.query("DELETE FROM plans WHERE id = ?", [req.params.id], function(err, result) {
        if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
        } else if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();

    });

});

module.exports = router;