var restify = require('restify'),
    validator = require('tv4'),
    _ = require('underscore'),
    swagger = require('swagger-node-restify'),
    payload_schema = require('./schemas/payload.js');

var server = restify.createServer({
    name: 'HomeTrack',
});
server.use(restify.bodyParser());
server.use(restify.queryParser());

var action = function (req, res, next) {
    var body = req.body;
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
};

server.post({
    name: 'filter',
    path: '/properties?filters',
    version: "1.0.0"
}, action);

swagger.addModels({ models: { payload: payload_schema } });
swagger.setAppHandler(server);

swagger.addPost({
    'spec' : {
        'path': '/properties',
        'method': 'POST',
        'summary': 'Returns the list of properties ',
        'params': [
            swagger.queryParam('filters', 'Filter the properties', 'string'),
            swagger.bodyParam('payload', 'The JSON data of the properties enveloped in payload', 'string')
        ],
        'responseClass': 'string',
        'nickname': 'filterProperties'
    },
    'action': action
});

swagger.configureSwaggerPaths("", "/api-docs", "") 
swagger.configure('http://housetrack.herokuapp.com' + process.env.PORT, '1.0.0')

console.log('Listening for Rest requests on: ' + process.env.PORT);
server.listen(process.env.PORT || 9999);
