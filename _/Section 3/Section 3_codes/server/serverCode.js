const express = require('express');
const request = require('request');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3010;
let result = 10;

app.get('/read', function(req, res) {
  res.json({"answer": result});
});

app.post('/send', function(req, res) {
  console.log("req.body.message", req.body.message);
  result = req.body.message
  res.json({"status": "ok"});
});

console.log(' ***** Start session *** ');
app.listen(port, function() {
  console.log("Server running on port ", port);
});