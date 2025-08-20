const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const blogController = require('../controllers/blogController');


// CRUD operations for blogs

//GET method to fetch all blogs and render the index page
router.get('/', blogController.blog_index); 


// POST method is used to submit the form data to the server
router.post('/', blogController.blog_create_post); // this will use the blog_create_post function from the blogController

// GET method to render the create blog page
router.get('/create', blogController.blog_create_get); // this will use the blog_create_get function from the blogController


// GET method to get a single blog by id
router.get('/:id', blogController.blog_details); // this will use the blog_details function from the blogController



// DELETE method to delete a blog by id
router.delete('/:id', blogController.blog_delete); // this will use the blog_delete function from the blogController


// Export the router to be used in the app.js file
module.exports = router;
// this will export the router so that it can be used in the app.js file