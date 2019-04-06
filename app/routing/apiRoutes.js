let friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        let match = require("../data/logic")(req.body, friends);
        friends.push(req.body);
        res.json(match);
    });

}