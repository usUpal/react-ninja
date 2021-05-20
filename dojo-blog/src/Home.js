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
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=> {
        setTimeout(() =>{
            fetch('http://localhost:8000/blogs ')
                .then(res => {
                    if(!res.ok){
                        throw Error('couldn\'t fetch the data')
                    }
                    return res.json()
                })
                .then(data => {
                    setBlogs(data)
                    setIsPending(false)
                    setError(false)
                })
                .catch(err =>{
                    setError(err.message)
                    setIsPending(false)
                })
        }, 1500)
    },[])  

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogItems = {blogs} titles= "All Blogs" />} 
            
            
        </div>
     );
}
 
export default Home;