var WPill = function(){};

WPill.prototype.Who = function(client_id, data) {
  return this._extend({
    client_id: client_id,
  }, data);
};

WPill.prototype.What = function(req, event, logs) {
  if(!req){ return {};}

  var base = {
    'event': event,
    host: req.host,
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

  return this._extend(base, logs);
};

WPill.prototype.Where = function(path, site, what) {
  return this._extend({
    path: path,
    site: site
  }, what);
};

WPill.prototype.When = function(client_id, what) {
  return this._extend({
    client_id: client_id,
    time: Date.now()
  }, what);
};

WPill.prototype._extend = function(base, ext){
  if(ext){
    for(var i in ext){
      base[i] = ext[i];
    }
  }
  return base;
};

module.exports.WPill = WPill;
