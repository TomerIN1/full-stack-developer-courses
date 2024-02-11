const mongoose = require('mongoose'); //require mongoose
const Schema = mongoose.Schema; //from the mongoose import schema object. 

//remember - a schema is going to define the structure of the documents that we're gonna later store inside a collection. it the thing that a model wraps around. 

//here we are creating the stracture of the blog schema. 
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true }); //this is automatically generates time stamp properties for us on our blog documents 

//after creating the schema we need to use this schema in order to create a model. follow this code: 
//we create a variable for our model. and use mongoose.model('collection_name_in_the_Database', document_schema) to create this model. 
const Blog = mongoose.model('BlogColl', blogSchema);

//finally we export the blog model. 
module.exports = Blog; 

//now we can use it to same some new blog documents to our database. 