import { useState, useEffect } from 'react'
import BlogList from './BlogList';
const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title:'My name is Elon', body: 'lorem..', author:'elon', id: 1},
        {title:'My name is Steve', body: 'lorem..', author:'steve', id: 2},
        {title:'My name is Bill', body: 'lorem..', author:'bill', id: 3},
        {title:'My name is Musk', body: 'lorem..', author:'elon', id: 4}
    ]);

    const handleDelete = (id) =>{
        const newBlog =blogs.filter(blog => blog.id !== id)
        setBlogs(newBlog)
    }
    useEffect(()=> {
        console.log("useEffect ran")
        console.log(blogs)
    }) 
    return ( 
        <div className="home">
            {/* \<h2>All Blogs</h2> */}
            <BlogList blogItems = {blogs} titles= "All Blogs" handleDelete = {handleDelete}/> 
            {/* <BlogList blogItems = {blogs.filter((blog) => blog.author === 'elon')} titles= "Elon's Blog"/>  */}

        </div>
     );
}
 
export default Home;