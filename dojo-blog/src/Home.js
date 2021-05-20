import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div><img src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif" alt="" /></div>}
            {blogs && <BlogList blogItems = {blogs} titles= "All Blogs" />} 
            
            
        </div>
     );
}
 
export default Home;