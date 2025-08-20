const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Schema is a constructor function that creates a new schema



const blogSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true } ); //timestamps is a plugin that adds createdAt and updatedAt fields to the schema

const Blog = mongoose.model('Blog', blogSchema); // Blog is a model that represents the blog collection in the database


module.exports = Blog; // exporting the Blog model so that it can be used in other files


