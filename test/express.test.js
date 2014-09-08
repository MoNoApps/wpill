var express = require('express');
var app = express();
var WPill = require('../wpill').WPill;
var wpill =  new WPill("mongodb://127.0.0.1/wpill")

app.all('*', function(req, res, next){
  wpill.What(req,'page_view');
  next();
});

//Web
app.get('/', function(req, res){
  setTimeout(function(){
    res.json({data: "Home page"});
  },100);
});

//API
app.post('/v1/section/:name', function(req, res){
  req.accepts('application/json');
  setTimeout(function(){
    res.json({data: "The section API"});
  },100);
});

app.listen(1244);
