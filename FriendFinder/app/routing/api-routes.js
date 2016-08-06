var express = require('express');
var app = express();
var router = express.Router();

var friends = {
  "name": "",
  "photo": "",
  "scores": []
}

router.get('/', function(req, res){
  res.json(friends);
});

//our api is stored here
app.use('/api', router);
