var express = require('express');
var app = express();
//Use the .env file
require('dotenv').config();








// Meet the Node console
console.log("Hello World");



// Implement a Root-Level Request Logger Middleware
app.use(function(req, res, next) {
  console.log(req.method+" "+req.path+" - "+ req.ip);
  next();
}
)






app.use('/public', express.static(__dirname + '/public'));

// Serve an HTML File
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
}
);

// Serve JSON on a Specific Route
app.get("/json", function (req, res) {
  (process.env.MESSAGE_STYLE === "uppercase" ? res.json({ "message": "HELLO JSON" }) : res.json({ "message": "Hello json" }))
}
);








module.exports = app;
