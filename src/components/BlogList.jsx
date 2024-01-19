import { Link } from "react-router-dom";

function BlogList({blogs, title}) {

    return(

        <div className="blog-list">

            <h2 className="text-center text-[35px] font-sans">{title}</h2>

            {blogs.map((blog) => (

                <div key={blog.id} className="blog-preview py-[10px] px-[16px] my-[30px] border border-b-[#fafafa] hover:">

                    <Link to={`/blogs/${blog.id}`}>

                        <h2 className="text-[20px] text-[#dc2626] font-bold mb-[9px]">{blog.title}</h2>

                        <p className="py-[10px]">{blog.body}</p>

                        <p className="text-[#2562eb] font-medium pb-[10px]">Written by : {blog.author}</p>

                    </Link>


                </div>

            ))}

        </div>
    )
}

export default BlogList;