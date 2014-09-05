//Utils
var MPill = require('mpill').MPill;

/**
 * WPill is a watch tracker tool.
 * @method WPill
 * @param {} url, the url of the moongodb.
 * @return
 */
var WPill = function(url){
  this.users  = new MPill('users', url);
  this.tracks = new MPill('tracks', url);
};

/**
 * Who method allows to identify a person, client or customer.
 * @method Who
 * @param {} client_id
 * @param {} data
 * @return
 */
WPill.prototype.Who = function(client_id, data) {
  var who = this._extend({client_id: client_id,}, data);
  this.users.Insert(who, function(){console.log("saved track 'who'")});
};

/**
 * What method allows to track an event.
 * @method What
 * @param {} req, the req object from express framewowk.
 * @param {} event, the event name.
 * @param {} data, aditional data.
 * @return
 */
WPill.prototype.What = function(req, event, data) {
  if(!req){ return {};}

  var base = {
    'event': event,
    hostname: req.hostname,
    url:req.url,
    params: req.params,
    accepts: req.accepts(),
    path: req.route.path,
    query: req.query,
    secure: req.secure,
    agent: req.header("user-agent"),
    route: req.route.path,
    query: req.query,
    method: req.method,
    protocol: req.protocol,
    remote: {
      origin: req.header("origin"),
      ip: req.ip,
      ips: req.ips,
      forwarded: req.header('x-forwarded-for'),
      address: req.connection.remoteAddress
    }
  };

  var what = this._extend(base, data);
  this.tracks.Insert(what, function(){console.log("saved track 'what'")});
};

/**
 * Where method allows to indicate what is the website
 * that originates the event.
 * @method Where
 * @param {} path, the uri used
 * @param {} site, the site name or identifier
 * @param {} what, the WPill.What object
 * @return
 */
WPill.prototype.Where = function(path, site, what) {
  var where = this._extend({
    path: path,
    site: site
  }, what);

  this.tracks.Insert(where, function(){console.log("saved track 'where'")});
};

/**
 * When method indicates when the event was originated.
 * @method When
 * @param {} client_id
 * @param {} what
 * @return
 */
WPill.prototype.When = function(client_id, what) {
  var when = this._extend({
    client_id: client_id,
    time: Date.now()
  }, what);

  this.tracks.Insert(when, function(){console.log("saved track 'when'")});
};

/**
 *This function join two objects.
 */
WPill.prototype._extend = function(base, ext){
  if(ext){
    for(var i in ext){
      base[i] = ext[i];
    }
  }
  return base;
};

module.exports.WPill = WPill;
