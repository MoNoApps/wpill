var WPill = require('../wpill.js').WPill;
var wpill = new WPill();
var assert = require("assert");

describe('describe WPill', function(){

  describe('#WPill()', function(){
    it('wpill should instance of WPill', function(){
      assert.ok(wpill instanceof WPill);
    })

    it('WPill should have a Who function', function(){
      assert.equal('function', typeof wpill.Who);
    })

    it('WPill should have a What function', function(){
      assert.equal('function', typeof wpill.What);
    })

    it('WPill should have a Where function', function(){
      assert.equal('function', typeof wpill.Where);
    })

    it('WPill should have a When function', function(){
      assert.equal('function', typeof wpill.When);
    })

    it('WPill should have a _extend function', function(){
      assert.equal('function', typeof wpill._extend);
    })

    it('WPill should works', function(){
      var joined = wpill._extend({a:"a"},{b:"b"})
      assert.deepEqual({"a":"a","b":"b"}, joined);
    })

  })

})
