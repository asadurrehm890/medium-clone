import Link from 'next/link';
import {useState} from 'react';
import {useRouter} from 'next/router';

function Category(props){
	const router=useRouter();

	const [list, setList]=useState(props.data);

    const handleCateClick=async(slug)=>{
		router.push(`/category/${slug}`, undefined, { shallow: false });
		
	}	
	
	const handleTagClick=async(slug)=>{
		router.push(`/tag/${slug}`, undefined, { shallow: true });
	}
	
	return(
	  <>
	
	    <Link href="/" className="btn btn-light mb-4">Back to Home</Link>
		
		
		{list.map((item)=>{
				return(
				
				
			<div className="mb-4 card p-4 shadow">
				  <div className="row">
				  <div className="col-lg-4 col-md-12">
				  <img className="img-fluid" src={item.img} />
				  </div>
				  <div className="col-lg-8 col-md-12">
				  
				  <h2 className="text-dark">{item.title}</h2>
				  <div className="mb-2 d-flex align-items-center">
				  <h6 className="me-2">Categories</h6>
				  <ul className="mb-0 list-inline">
				    {item.categories.map((cat)=>{
						return(
						  <li className="list-inline-item"><button onClick={()=>handleCateClick(cat)} className="btn btn-dark">{cat}</button></li>
						)
					})}
				  </ul>
				  </div>
				  <div className="d-flex align-items-center">
				  <h6 className="me-2">tags</h6>
				  <ul className="mb-0 list-inline">
				    {item.tags.map((cat)=>{
						return(
						  <li className="list-inline-item"><button onClick={()=>handleTagClick(cat)} className="btn btn-dark">{cat}</button></li>
						)
					})}
				  </ul>
				  </div>
				  
				  </div>
				  </div>
				</div>
				
				
				)
			})}
		
		
	
	  </>
	)
}

export default Category;

export async function getStaticPaths(){
	const response=await fetch('http://localhost:8000/api/blogs');
	const data=await response.json();
	const cate=[];
	data.blogs.map((post)=>{
		post.categories.map((cat)=>{
			if(!cate.includes(cat)){
				cate.push(cat);
			}
		});
	});
	
	const thePaths=cate.map((cat)=>{
		return { params: { slug: cat } }
	});
	
return {
    paths: thePaths,
    fallback: false
  }
	
	
}

export async function getStaticProps(context){
	const response=await fetch(`http://localhost:8000/api/blogs/slug/${context.params.slug}`);
	
	const data=await response.json();
	
	return {
    props: {
      data,
    },
	revalidate: 10,
  }
}
