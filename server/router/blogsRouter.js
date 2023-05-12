const express=require('express');

const {
	getBlogs,
	getSingleBlog,
	createBlog,
	updateBlog,
	delBlog,
	catBlog,
	tagBlog
}=require('../controllers/blogsController');

const router=express.Router();


router.route('/slug/:slug').get(catBlog);
router.route('/tag/:slug').get(tagBlog);

router.route('/').get(getBlogs).post(createBlog);

router.route('/:id').get(getSingleBlog).put(updateBlog).delete(delBlog);

module.exports=router;