const asyncHandler=require('express-async-handler');
const Blog=require('../models/Blog');

const getBlogs=asyncHandler(async(req,res)=>{
	
	const { page = 1, limit = 4 } = req.query;
	
	 const count = await Blog.count();
	 
	const blogs=await Blog.find().limit(limit).skip((page-1)*limit).exec();
	
	res.status(200).json({blogs,
	totalPages: Math.ceil(count / limit),
      currentPage: page
	}
	);
});

const getSingleBlog=asyncHandler(async(req,res)=>{
	const blog=await Blog.findById(req.params.id);
	if(!blog){
		res.status(404);
		throw new Error('Post Not Found');
	}
	res.status(200).json(blog);
});

const createBlog=asyncHandler(async(req,res)=>{
	const {title, content, img, categories, tags}=req.body;
	if(title==null||content==null||img==null||categories==null||tags==null){
		res.status(404);
        throw new Error("All Fields Are Mandatory");
	}
	const newBlog=await Blog.create({
		title, content, img, categories, tags
	});	
	
	res.status(200).json(newBlog);
});


const updateBlog=asyncHandler(async(req,res)=>{
	
	const blog=await Blog.findById(req.params.id);
	if(!blog){
		res.status(404);
		throw new Error('post not found');
	}
	
	const changeBlog=await Blog.findByIdAndUpdate(
		req.params.id,
		req.body,
		{new:true}
	);
	
	 res.status(200).json(changeBlog);
});


const delBlog=asyncHandler(async(req,res)=>{
	const blog=await Blog.findById(req.params.id);
	if(!blog){
		res.status(404);
		throw new Error('post not found');
	}
	
	await Blog.deleteOne({_id:req.params.id});
	res.status(200).json(blog);
});

const catBlog=asyncHandler(async(req,res)=>{
	
	const blogs=await Blog.find({categories:{ "$in" : [`${req.params.slug}`]}});
	console.log(blogs);
	if(!blogs){
		res.status(404);
		throw new Error('post not found');
	}
	res.status(200).json(blogs);
});

const tagBlog=asyncHandler(async(req,res)=>{
	const blogs=await Blog.find({tags:{ "$in" : [`${req.params.slug}`]}});
	console.log(blogs);
	if(!blogs){
		res.status(404);
		throw new Error('post not found');
	}
	res.status(200).json(blogs);
});

module.exports={
	getBlogs,
	getSingleBlog,
	createBlog,
	updateBlog,
	delBlog,
	catBlog,
	tagBlog
};
