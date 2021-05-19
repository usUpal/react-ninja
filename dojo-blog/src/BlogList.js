const BlogList = (props) => {
    const blogItems = props.blogItems
    const title = props.titles
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogItems.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h3>{blog.body}</h3>
                    <p>Written by {blog.author}</p>

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;