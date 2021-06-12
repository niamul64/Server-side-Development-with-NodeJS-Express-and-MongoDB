// Setting up a REST API
// You will continue in the node-express folder and modify the server in this exercise.
// Install body-parser by typing the following at the command prompt:
// npm install body-parser@1.18.3 --save

const express = require('express'),
     http = require('http');
const morgan = require('morgan');

const dishRouter = require('./routes/dishRouter'); // route locator


const bodyParser = require('body-parser');///So this allows us to parse the body of the request message, which is formatted in JSON format.

const hostname = 'localhost';
const port = 3000;


const app = express();
app.use(morgan('dev'));

app.use(bodyParser.json());




app.use('/dishes', dishRouter); // if "/dishes" comes in then handel by dishRoute





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