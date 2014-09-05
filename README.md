Watch For Express
==

This is a little tool to extract
data from 'req' and
prepare for save it as a JSON.

Tests
===

mocha

Usage
===
Start database
````shell
mongod --dbpath ....../data/wpill
````
Next sample intercepts all request:
````js
var express = require('express');
var app = express();

//Utils
var WPill = require('wpill').WPill;
var wpill =  new WPill("mongodb://127.0.0.1/wpill")

app.all('*', function(req, res, next){
  wpill.What(req,'page_view');
  next();
});

````
