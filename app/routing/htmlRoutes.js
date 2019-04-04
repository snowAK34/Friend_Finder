const express = require("express");
const path = require("path");
const router = express.Router();

    router.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../../app/public/home.html"));
    });

    router.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../../app/public/survey.html"));
    });

module.exports = router;