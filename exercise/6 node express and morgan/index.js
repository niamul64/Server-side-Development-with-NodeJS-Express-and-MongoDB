// Setting up a REST API
// You will continue in the node-express folder and modify the server in this exercise.
// Install body-parser by typing the following at the command prompt:
// npm install body-parser@1.18.3 --save

const express = require('express'),
     http = require('http');
const morgan = require('morgan');


const bodyParser = require('body-parser');///So this allows us to parse the body of the request message, which is formatted in JSON format.

const hostname = 'localhost';
const port = 3000;


const app = express();
app.use(morgan('dev'));

app.use(bodyParser.json());






/////Rest////////////


///let's start building up The REST API support for the /dishes endpoint. Using the app.all, app.get, put, post, and delete methods are supported by express. 

app.all('/dishes', (req,res,next) => {// the first parameters that app.all takes is the endpoint.
//So when we say app.all, no matter which method is invoked, get, put, post, or delete, for the /dishes REST API endpoint, this code will be executed first by default here.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next(); //when you call next, what it means is that it'll continue on to look for additional specifications down below here, which will match this dishes endpoint
});


app.get('/dishes', (req,res,next) => {
  res.end('Will send all the dishes to you!');
});

app.post('/dishes', (req, res, next) => {
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
 });

app.put('/dishes', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
});

app.delete('/dishes', (req, res, next) => {
  res.end('Deleting all dishes');
});

app.get('/dishes/:dishId', (req,res,next) => {
  res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});



// dishID come in too


app.get('/dishes/:dishId', (req,res,next) => {
  res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
res.statusCode = 403;
res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
res.write('Updating the dish: ' + req.params.dishId + '\n');
res.end('Will update the dish: ' + req.body.name + 
      ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
  res.end('Deleting dish: ' + req.params.dishId);
});






// dishID come in too




/////Rest////////////






app.use(express.static(__dirname + '/public')); // serve from public folder 

app.use((req, res, next) => {// if anything is not found in public folder then serve this default folder 
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});