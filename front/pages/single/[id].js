import Link from 'next/link';

function Single(props){
	
	
	return(
	<>
	<Link className="btn btn-light mb-4" href="/">Back to Home</Link>
      <h2>{props.data.title}</h2>
      <p>{props.data.content}</p>	  
	</>
	)
}

export default Single;

export async function getStaticPaths(){
	const response=await fetch('http://localhost:8000/api/blogs');
	const data=await response.json();
	
	const thePaths=data.blogs.map((blog)=>{
		return { params: { id: blog._id } }
	});
	return {
    paths: thePaths,
    fallback: false
  }
}

export async function getStaticProps(context){
	const response=await fetch(`http://localhost:8000/api/blogs/${context.params.id}`);
	const data=await response.json();
	console.log(data);
	return {
    props: {
      data,
    }
  }
} 