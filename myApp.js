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
);
// Get Query Parameter Input from the Client
app.get("/name", function (req, res) {
  res.json({ name: req.query});
}
);




app.use('/public', express.static(__dirname + '/public'));

// Serve an HTML File
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
}
);

// Chain Middleware to Create a Time Server
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();  
  next();
}, function(req, res) {
  res.send({time: req.time});
});

// Get Route Parameter Input from the Client
app.get("/:word/echo", function (req, res) {
  res.json({echo: req.params.word});
}
);
// Serve JSON on a Specific Route
app.get("/json", function (req, res) {
  (process.env.MESSAGE_STYLE === "uppercase" ? res.json({ "message": "HELLO JSON" }) : res.json({ "message": "Hello json" }))
}
);








module.exports = app;
