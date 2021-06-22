var express = require('express');
var app = express();
require('dotenv').config();









console.log("Hello World");











app.use('/public', express.static(__dirname + '/public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
}
);

//   app.get("/json",function(req, res) {
//     res.json({"message": "Hello json"} );
//   }
//   );

app.get("/json", function (req, res) {
  (process.env.MESSAGE_STYLE === "uppercase" ? res.json({ "message": "HELLO JSON" }) : res.json({ "message": "Hello json" }))
}
);








module.exports = app;
