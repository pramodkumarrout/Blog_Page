STEP:1
1. create a http module in node.js
const http = require('http');

4. Read the file using file system module
const fs = require('fs');

// using lodash module
const _ = require('lodash');



2. Create a server
const server = http.createServer( (req, res) => {

    // req made by client
    console.log(req.url, req.method);

    // res made by server

    // using setHeader to set the content type
    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1> Hello World </h1>);
    //rea.end();

    // step: 5
    // page router
    let path = './docs/';
    switch(req.url) {
        case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
        case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;

        // Step: 6
        // redirect pages 
        case '/about-me':
        res.statusCode = 301;
        res.setHeader('location', '/about');
        res.end();
        break;

        default:
        path += '404.html';
        res.statusCode = 404;
        res.end();
        break;
    }


    // step: 4 

    // read the file 
    fs.readFile(path, (err,data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        else
        {
            res.end(data);
        }
    })



})
3. Start the server

server.listen(3000, 'localhost', () => {
    console.log('Server is running at port 3000');
})


STEP: 2
install the nodemon package for restart the server automatically
npm install -g nodemon 
// run the server using nodemon
nodemon server.js

// cancel the nodemon server
using ctrl + c

STEP: 3
initial the npm package manager
npm init 


STEP: 4
install the lodash package for the use of lodash functions
npm install lodash





       // Using Express Framework to build 
    

STEP: 1

Install the express framework package for the use of express functions
npm install express


STEP: 2
Create a server
const express = require('express');
const app = express();

STEP: 3
Start the server
server.listen(3000);

STEP:4
Add Routing and HTML





















NOTE: 

if you want to install any of the project in your vs code 
you need to install the package manager
npm install

then it will run the project on your computer





