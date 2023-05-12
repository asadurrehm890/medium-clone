import {useState} from 'react';
import Link from 'next/link';

function HomePage(props) {
	
  const [list, setList]=useState(props.data.blogs);	
  const [page, setPage]=useState(props.data.currentPage);	
  
 
  
  const getpage=async(pn)=>{
	 const response = await fetch(`http://localhost:8000/api/blogs?page=${pn}`);
	const data=await response.json();
	
	  setList(data.blogs);
  }
  

 
  return (
    <>
	  
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
						  <li className="list-inline-item"><Link href={`/category/${cat}`} className="btn btn-dark">{cat}</Link></li>
						)
					})}
				  </ul>
				  </div>
				  <div className="d-flex align-items-center">
				  <h6 className="me-2">tags</h6>
				  <ul className="mb-0 list-inline">
				    {item.tags.map((cat)=>{
						return(
						  <li className="list-inline-item"><Link href={`/tag/${cat}`} className="btn btn-dark">{cat}</Link></li>
						)
					})}
				  </ul>
				  </div>
				  
				   <div className="d-flex align-items-center justify-content-end">
				     <Link href={`/single/${item._id}`} className="btn btn-primary">View</Link>
				   </div>
				  </div>
				  </div>
				</div>
				
				
				)
			})}
			    
				
			 
		<nav aria-label="Page navigation example">
  <ul className="pagination">
   
	
	<li className="page-item"><button onClick={()=>getpage(1)} className="page-link" >1</button></li>
	<li className="page-item"><button onClick={()=>getpage(2)} className="page-link" >2</button></li>
	<li className="page-item"><button onClick={()=>getpage(3)} className="page-link" >3</button></li>
	
 
	
  </ul>
</nav>
			
		  
		  
	</>
  )
}

export default HomePage


export async function getStaticProps(){
	const response = await fetch('http://localhost:8000/api/blogs?page=1');
	const data=await response.json();
	
	return{
		props:{
			data
		}
	}
	
}

