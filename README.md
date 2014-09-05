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
````js
var wpill =  new WPill();
log = .../your_table_or_collection
app.all('*', function(req, res, next){
  log.save(tracer.Log(req, 'page_view', {bitcoin: 'eeeeeeiiiiiiiii'}));
  next();
});

````
