import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/styles.css';

function App({Component, pageProps}){
	return(
	<>
	  <header className="bg-dark py-4">
	    <div className="container">
		   <div className="text-center">
		      <h1 className="text-white">Blogs</h1>
		   </div>
		</div>
	  </header>
	  <main className="py-5">
	    <div className="container">
		 <div className="row">
		 <div className="col-lg-8 col-md-12">
	     <Component {...pageProps} />
		 </div>
		 
		 <div className="col-lg-4 col-md-12 bg-dark p-4 text-center">
		 
		    <h2 className="text-white">About</h2>
			   <p className="text-white">
			     The tech use in front-end, includes react, next js, bootstrap, jsx, javascript, css
			   </p>
			    <p className="text-white">
			     The tech use in back-end, includes node.js, express, mongodb, cors
			   </p>
		 
		 </div>
		 </div>
		 </div>
	  </main>
	  <footer className="py-4 bg-dark">
	    <p className="mb-0 text-white text-center">Source Code is Available <a href="" className="text-warning">Here</a></p>
	  </footer>
	  </>
	)
}
export default App;
