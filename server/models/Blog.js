const mongoose=require('mongoose');

const blogsSchema=new mongoose.Schema({
	title:{type:String, required:true},
	content:{type:String, required:true},
	img:{type:String, required:true},
	categories:[String],
	tags:[String],
}, {timestamps:true});

const Blog=mongoose.model('Blog', blogsSchema);

module.exports=Blog;

