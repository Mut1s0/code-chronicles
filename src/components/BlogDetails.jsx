import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import Loader from "./Loader";

function BlogDetails() {

    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push("/");
        })
    }

    return(

        <div className="blog-details">

            <h2 className="text-center text-[35px] font-sans pb-10">Blog Details</h2>

            {isPending && <Loader />}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="text-[20px] text-[#dc2626] font-bold mb-[9px]">{blog.title}</h2>
                    <p className="text-[#2562eb] font-medium py-[10px]">Written by : {blog.author}</p>
                    <div className="py-[20px]">{blog.body}</div>
                    <button className="bg-[#f1356d] text-white border-0 p-[8px] rounded-[8px] cursor-pointer mt-5" onClick={handleClick}>Delete</button>
                </article>
            )}

        </div>

    )
}

export default BlogDetails;