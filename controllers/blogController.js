// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const mongoose = require('mongoose');
const Blog = require('../modules/blog'); // import the blog model from the models directory



// This function fetches all blogs and renders the index page

const blog_index = (req, res) => {
     Blog.find().sort( { createdAt: -1})
    .then( (result) => {
        res.render('blogs/index', { title: 'All Blogs', blogs: result }); // render the index page with the blogs data
    })
    .catch( (err) => {
        console.log(err); // log the error to the console
    })
}

// This function fetches a single blog by its ID and renders the details page
const blog_details = (req, res) => {
     const rawId = req.params.id || '';
    const id = rawId.trim();

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).render('404', { title: 'Blog not found' });
    }

    Blog.findById(id)
    .then( (result) => {
        if (result) {
            res.render('blogs/details', { blog: result, title: 'Blog Details' });
        } else {
            res.status(404).render('404', { title: 'Blog not found' });
        }
    })
    .catch( (err) => {
        res.status(404).render('404', { title: 'Blog not found' });
        console.log(err); // log the error to the console
    })
}



//  This function renders the create blog page
const blog_create_get = (req, res) => {
res.render('blogs/create', {title: 'Create a New Blog'});
}


// This function handles the form submission to create a new blog
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);

    blog.save()
    .then ( (result) => {
        res.redirect('/blogs'); // redirect to the blogs page after saving the blog

    })
    .catch( (err) => {
        console.log(err); // log the error to the console
    })
}

// This function deletes a blog by its ID
const blog_delete = (req, res) => {
 const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then( (result) => {
        res.json( { redirect: '/blogs' }); // send a JSON response to redirect to the blogs page
    })
    .catch( (err) => {
        console.log(err); // log the error to the console
    })
}






module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}