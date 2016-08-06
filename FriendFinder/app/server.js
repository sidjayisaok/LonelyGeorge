//variables
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 5000 || process.env.PORT;
//this sets up a router
var router = express.Router();
//this handles our date function in the terminal
var time = new Date().getTime();
var date = new Date(time);
//logs when someone accessed the website
var logger = function(req, res, next){
  console.log('request made at ' + date.toString());
  next();
};
//show in terminal when someone accessed website
app.use(logger);
//api test
router.get('/', function(req, res){
  res.json({
    "name": "",
    "photo": "",
    "scores": []
  });
});

//our api is stored here
app.use('/api', router);


//for formatting reasons
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

//this delivers static pages in the public folder
app.use(express.static('public'));
//set up body-parser
app.use(express.bodyParser());

//this sends a response to the browser
app.get('/public/home.html', function(req, res){
  res.send('This worked!');
});


app.post('/public/home', function (req, res){
  res.send('This worked, too!');
  console.log('Is this working?');
});

//this listens for any traffic from the website
app.listen(PORT, function(){
  console.log("port is working: " + PORT);
});
