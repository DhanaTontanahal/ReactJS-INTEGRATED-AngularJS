var express = require("express");
var path = require("path");
var app = express();

var staticPath = path.resolve(__dirname, ".");

app.use(express.static(staticPath));

app.listen(6352, function () {
  console.log("listening at 6352 for 82");
});
