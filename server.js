var restify = require('restify'),
    validator = require('tv4'),
    payload_schema = require('./schemas/payload.js');

var server = restify.createServer({
    name: 'HomeTrack',
});
server.use(restify.bodyParser());
server.use(restify.queryParser());
server.post({
    name: 'filter',
    path: '/rest/property?filters=[{"workflow":"completed"}]',
    version: "1.0.0"
}, function (req, res, next) {
    console.log('req.body:' + req.body);
    var body = JSON.parse(req.body);
    var valid = validator.validateResult(body, payload_schema);
    if (!valid.valid) {
        res.send(valid);
        return;
    }
    var completedProperties = [];
    body.payload.forEach(function (property) {
        if (property.workflow == 'completed') {
            completedProperties.push(
                {
                    'concataddress': property.address.buildingNumber + ' ' + property.address.street + ' ' + property.address.suburb + ' ' + property.address.state + ' ' + property.address.postcode,
                    'type' : property.type,
                    'workflow' : property.workflow
                })
        }
    });
  
    var respopnse = { "response": completedProperties };
    res.send(respopnse);
}
);
server.listen(8080);