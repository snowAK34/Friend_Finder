const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});