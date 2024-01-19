import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Loader from "./Loader";

function Home() {

    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

    return(

        <div className="home">

            {error && <div>{error}</div>}
            {isPending && <Loader />}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

        </div>
    )
}

export default Home;