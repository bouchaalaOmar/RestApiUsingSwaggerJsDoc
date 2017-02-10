
var express=require('express');
var bodyParser=require('body-parser');
var swaggerJSDoc = require('swagger-jsdoc');
var routes = require('./api/routes');
var swaggerUi = require('swagger-ui-express');
//initialise express
var app=express();
app.use(bodyParser.json());

// Swagger definition
// You can set every attribute except paths and swagger
// https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md
var swaggerDefinition = {
  info: { // API informations (required)
    title: 'Hello World', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'A sample API', // Description (optional)
  },
  host: 'localhost:3000', // Host (optional)
  basePath: '/', // Base path (optional)
};

// Options for the swagger docs
var options = {
  // Import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // Path to the API docs
  apis: ['./api/routes*.js'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
var swaggerSpec = swaggerJSDoc(options);

// Serve swagger docs the way you like (Recommendation: swagger-tools)
app.get('/api-docs', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.use('/api-ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Set up the routes
routes.setup(app);


app.listen(3000);
console.log('Running on port 3000...');