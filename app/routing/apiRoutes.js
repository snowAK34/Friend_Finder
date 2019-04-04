const express = require('express');
const router = express.Router();

router.get("/api/friends", function(req, res) {
    res.json(friends);
});
  
router.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(req.body);
});

//some other endpoints to submit data
module.exports = router;