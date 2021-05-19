import { useState } from 'react'
import BlogList from './BlogList';
const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title:'My name is Elon', body: 'lorem..', author:'elon', id: 1},
        {title:'My name is Steve', body: 'lorem..', author:'steve', id: 2},
        {title:'My name is Bill', body: 'lorem..', author:'bill', id: 3}
    ]);
    return ( 
        <div className="home">
            {/* \<h2>All Blogs</h2> */}
            <BlogList blogItems = {blogs} titles= "All Blogs"/> 
            
           
            

        </div>
     );
}
 
export default Home;