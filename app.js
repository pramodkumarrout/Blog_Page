// Here we use Express.JS to create a server
const express = require('express'); // here express is a module


const morgan = require('morgan'); // morgan is a middleware for logging requests

const mongoose = require('mongoose'); // mongoose is a library to connect to MongoDB


const blogRoutes = require('./routes/blogRoutes'); // import the blog routes from the routes directory

// create an express app
const app = express();

// connect to MongoDB atlas database and listen to the port 3000
const dbURI = 'mongodb+srv://netninja:root@cluster0.66qf3kc.mongodb.net/Note?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) // connect to the database
.then((result) => app.listen(3000))// if the connection is successful, it will log this message.catch((err) => console.log(err)); // if there is an error in the connection, it will log the error message
.catch((err) => console.log(err)); // if there is an error in the connection, it will log the error message



// register view engines
app.set('view engine', 'ejs');
// app.set('views', 'myViews'); // all of our views will be in this directory




// static middleware
// middleware to serve static files
app.use(express.static('public')); // this will serve the static files from the public directory

// static middleware to parse the request body
app.use(express.urlencoded( { extended: true })); // this will parse the request body and make it available in req.body

// use morgan middleware to log requests

app.use(morgan('dev')); // 'dev' is a predefined format for logging requests



// CURD operations with mongoose
// // mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog( {
//         title: 'New Blog',
//         snippet: 'About my new blog',
//         body: 'More about my new blog'
//     });


//     blog.save() // save the blog to the database
//     .then( (result) => {
//         res.send(result) // send the result to the client
//     })
//     .catch( (err) => {
//         console.log(err); // log the error to the console
//     });
// })



// // get all blogs from the database

// app.get('/all-blogs', (req, res) => {
//     Blog.find() // find all blogs in the database
//     .then( (result) => {
//         res.send(result);  // send the result to the client
//     })
//     .catch( (err) => {
//         console.log(err); // log the error to the console
//     })
// })


// // get a single blog by id from the database

// app.get('/single-blog', (req, res) => {
//     Blog.findById('68a05d1c5d331e32d1646b25')
//     .then( (result) => {
//         res.send(result);  // send the result to the client
//     })
//     .catch( (err) => {
//         console.log(err); // log the error to the console
//     })
// })

// // sandbox routes for mongoose and mongo end here




// create custom middleware function
// this function will run for every request made to the server
// it will log the request details to the console


// app.use( (req, res, next) => {
//     console.log('new Request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next(); // this will call the next middleware function in the stack
// });



// listen to the request

// app.get('/', (req, res) => {
//     res.send('<h1> Home Page </h1> ');
// });

// app.get('/about', (req, res) => {
//     res.send('<h1> About Page </h1>');
// });



     
// using sendFile() method to send the file
// app.get('/', (req, res) => {
//     // res.sendFile('./views/index.html', { root: __dirname });
//     const blogs = [
//         {title: "Once upon a time", snippet: "There was a man"},
//         {title: "Game of throne", snippet: "There was a king"}
//     ];
//     res.render('index', {title: 'Home Page', blogs});
// });


app.get('/', (req, res) => {
    res.redirect('/blogs'); // redirect to the blogs page
})


// using middleware function to log the request details

// app.use( (req, res, next) => {
//     console.log('In the next middleware function ');
//     next(); // this will call the next middleware function in the stack
// });


app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', {title: 'About Page'});
});


// blog routes

app.use('/blogs',blogRoutes); // use the blog routes in the app)





// redirects the request to another page
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })


// 404 page
// use() method s use middleware function to handle the error
// use() methos is used to check all of the url if it doesn't match it will 
// fire the function of 404 page and it will written always at the end of 
// the get method 

// status() method is used to send the status code

// example of middleware function
app.use( (req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', {title: '404 Page'});
} );







