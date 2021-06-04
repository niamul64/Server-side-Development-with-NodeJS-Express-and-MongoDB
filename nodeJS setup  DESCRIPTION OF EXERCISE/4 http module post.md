In this exercise, you will explore three core Node modules: HTTP, fs and path. At the end of this exercise, you will be able to:<br>

## Implement a simple HTTP Server<br>
## Implement a server that returns html files from a folder<br>

<br>

A Simple HTTP Server
<br>
Create a folder named node-http in the NodeJS folder and move into the folder.
<br>
In the node-http folder, create a subfolder named public. (to keep html files there)
<br>

#### Now,At the prompt, type the following to initialize a package.json file in the node-examples folder: 
### $ npm init
<br>
Accept the standard defaults suggested until you end up with a package.json file containing the following:<br>

in the package.json : <img width="" src= "pic/Capture10.PNG"/>
<br>
Create a file named index.js and add the following code to it:<br>
We're going to configure this index.js to use the Node HTTP module<br>

### code:(index.js)
const http = require('http');<br>
<br>
const hostname = 'localhost';<br>
const port = 3000;<br>
<br>
const server = http.createServer((req, res) => {<br>
    console.log(req.headers);<br>
    res.statusCode = 200;<br>
    res.setHeader('Content-Type', 'text/html');<br>
    res.end('<html><body><h1>Hello, World!</h1></body></html>');<br>
})<br>
<br>
server.listen(port, hostname, () => {<br>
  console.log(`Server running at http://${hostname}:${port}/`);<br>
});<br>

<img width="" src= "pic/Capture11.PNG"/>
<br><br>
<br>

## Now extend the http module further with html file:

<br>
Now,
In the public folder, create a file named index.html and add the following code to it:

<img width="" src= "pic/Capture14.PNG"/>
<img width="" src= "pic/Capture12.PNG"/><br>
Similarly create an aboutus.html file and add the following code to it:<img width="" src= "pic/Capture13.PNG"/><br>

### now in index.js, <br>
Add "file system core module" and "path core module" in index.js
<br> to show the html files as response
<img width="" src= "pic/Capture15.PNG"/><br>
 
### Now, insted of printing all log file to console log we will print only suficient information<br>
<img width="" src= "pic/Capture16.PNG"/><br><br>

now we will change the way we send response:(here we will only cover get request)
<img width="" src= "pic/Capture17.PNG"/><br><br>

### run the server by : npm start

## now if we write : http://localhost:3000/about.html
<img width="" src= "pic/Capture17.PNG"/><br><br>

## code:
const http = require('http');<br>
<br>
const fs = require('fs');<br>
const path = require('path');<br>
<br>
const hostname = 'localhost';<br>
const port = 3000;<br>

<br><br>
const server = http.createServer((req, res) => {<br>
  console.log('Request for ' + req.url + ' by method ' + req.method);<br>
<br>
  if (req.method == 'GET') {<br>
    var fileUrl;<br>
    if (req.url == '/') fileUrl = '/index.html';<br>
    else fileUrl = req.url;<br>
<br>
    var filePath = path.resolve('./public'+fileUrl);<br>
    const fileExt = path.extname(filePath);<br>
    if (fileExt == '.html') {<br>
      fs.exists(filePath, (exists) => {<br>
        if (!exists) {<br>
          res.statusCode = 404;<br>
          res.setHeader('Content-Type', 'text/html');<br>
          res.end('<html><body><h1>Error 404: ' + fileUrl + <br>
                      ' not found</h1></body></html>');<br>
          return;<br>
        }<br>
        res.statusCode = 200;<br>
        res.setHeader('Content-Type', 'text/html');<br>
        fs.createReadStream(filePath).pipe(res);<br>
      });<br>
    }<br>
    else {<br>
      res.statusCode = 404;<br>
      res.setHeader('Content-Type', 'text/html');<br>
      res.end('<html><body><h1>Error 404: ' + fileUrl + <br>
              ' not a HTML file</h1></body></html>');<br>
    }<br>
  }<br>
  else {<br>
      res.statusCode = 404;<br>
      res.setHeader('Content-Type', 'text/html');<br>
      res.end('<html><body><h1>Error 404: ' + req.method + <br>
              ' not supported</h1></body></html>');<br>
  }<br>
})
<br>
<br>
server.listen(port, hostname, () => {<br>
  console.log(`Server running at http://${hostname}:${port}/`);<br>
<br>
<br>

});<br>