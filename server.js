// create a server

// using request and response object

// create a server using http module
// step:1
const http = require('http');
// create a file system module to read the file
const fs = require('fs');
// create a lodash module to use the template
// step: 8
const _ = require('lodash');


// step: 2
const server = http.createServer( (req, res) => {
    // req made by client
    console.log(req.url, req.method);

    // lodash utility method
    // step: 9
    const num = _.random(0, 20);
    console.log(num);


    // _.once() method is used to call the function only once
    // step: 9 
    const greet = _.once(() => {
        console.log("Hello NodeJS");
    });
    greet();


    // res made by server

    // step: 3
    // set the header content type
    res.setHeader('Content-Type', 'text/html');

    // different pages path set as per users 
    // page router
    
    // step: 6
    let path = './views/';
    switch(req.url)
    {
        case '/' :
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        // redirect the about-me page to about page
        // step: 7
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('location', '/about');
            res.end();
            break;
        default :
         path += '404.html';
         res.statusCode = 404;
         break;
    }





    // send a html file to the browser 
    // step: 5
    fs.readFile(path, (err,data) => {
        if(err)
        {
            console.log(err);
            res.end();  
        }
        // res.write(data);
        res.end(data);
    })

    // res.write('<head> <link rel="stylesheet" href="#"> </head>')
    // res.write('<p> Welcome to Node.JS, Pramod Kumar Rout </p>');
    // res.write('<h1> I from CSE background </h1>');
    // res.write('<h2> I am a Software Developer');
    // res.end(); 
})

// step:4
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
})