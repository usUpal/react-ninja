const BlogList = ({blogItems, titles, handleDelete}) => {
    // const blogItems = props.blogItems
    // const title = props.titles
    return ( 
        <div className="blog-list">
            <h2>{ titles }</h2>
            {blogItems.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h3>{blog.body}</h3>
                    <p>Written by {blog.author}</p>
                    <button onClick = {()=>handleDelete(blog.id)}>Delete</button>

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;