// swaggerConfig
exports.swaggerConfig = function swaggerConfig(app,arweave_url,arweave_port){

    var swaggerUi = require('swagger-ui-express');
    var swaggerJSDoc = require('swagger-jsdoc');

    var swaggerDefinition = {
        info: {
            title: 'Swagger Node.js',
            version: 'v1',
            description: 'The interface path:'+arweave_url+":"+arweave_port,
        },
        host: arweave_url+":"+arweave_port,
        basePath: '/',
    };

    // options for the swagger docs
    var options = {
        // import swaggerDefinitions
        swaggerDefinition: swaggerDefinition,
        // path to the Node docs
        apis: ['./routes/*/*.js'],
    };

    // initialize swagger-jsdoc
    var swaggerSpec = swaggerJSDoc(options);

    // serve swagger
    app.get('/swagger.json', function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    app.use('/api-swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    console.log("Swagger running at "+arweave_url+":"+arweave_port+"/api-swagger");
}