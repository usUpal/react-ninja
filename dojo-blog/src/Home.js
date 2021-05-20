import { useState, useEffect } from 'react'
import BlogList from './BlogList';
const Home = () => {
    
    // const [blogs, setBlogs] = useState([
    //     {title:'My name is Elon', body: 'lorem..', author:'elon', id: 1},
    //     {title:'My name is Steve', body: 'lorem..', author:'steve', id: 2},
    //     {title:'My name is Bill', body: 'lorem..', author:'bill', id: 3},
    //     {title:'My name is Musk', body: 'lorem..', author:'elon', id: 4}
    // ]);
    // const [name, setName] = useState("xxx")
    const [blogs, setBlogs] = useState(null)


    useEffect(()=> {
        fetch('http://localhost:8000/blogs')
          .then(res => {
              return res.json()
          })
          .then(data => {
              setBlogs(data)
          })
    },[])  

    return ( 
        <div className="home">
            {/* \<h2>All Blogs</h2> */}
            {blogs && <BlogList blogItems = {blogs} titles= "All Blogs" />} 
            
            
        </div>
     );
}
 
export default Home;