var restify = require('restify'),
    validator = require('tv4'),
    _ = require('underscore'),
    payload_schema = require('./schemas/payload.js');

var server = restify.createServer({
    name: 'HomeTrack',
});
server.use(restify.bodyParser());
server.use(restify.queryParser());
server.post({
    name: 'filter',
    path: '/rest/properties?filters',
    version: "1.0.0"
}, function (req, res, next) {
    console.log('req.body:' + req.body);
    var body = JSON.parse(req.body);
    var valid = validator.validateResult(body, payload_schema);
    if (!valid.valid) {
        res.send(valid);
        return;
    }
    
    var completedProperties = _.where(body.payload, JSON.parse(req.query.filters));
    var result = [];
    completedProperties.forEach(function (property) {
        result.push(
            {
                'concataddress': property.address.buildingNumber + ' ' + property.address.street + ' ' + property.address.suburb + ' ' + property.address.state + ' ' + property.address.postcode,
                'type' : property.type,
                'workflow' : property.workflow
            })
    });
  
    var respopnse = { 'response': result };
    res.send(respopnse);
}
);
console.log('Listening for Rest requests on: ' + process.env.PORT);
server.listen(process.env.PORT || 9999);
