import { useHistory } from "react-router-dom";
import { useState } from "react";

function Create() {

    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const [ author, setAuthor ] = useState("Anto Jumia");
    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push("/");
        })
    }

    return(

        <div className="create max-w-[400px] mx-auto text-center">

            <h2 className="text-[20px] mb-[30px] font-sans">Add a New Blog</h2>

            <form onSubmit={handleSubmit}>

                <label className="text-left block">Blog Title :</label>
                <input 
                    type="text" 
                    required 
                    className="w-full py-[6px] px-[10px] my-[10px] border border-[#ddd] box-border block"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <label className="text-left block">Blog Body :</label>
                <textarea 
                    required 
                    className="w-full py-[6px] px-[10px] my-[10px] border border-[#ddd] box-border block"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>

                <label className="text-left block">Blog Author :</label>
                <select className="w-full py-[6px] px-[10px] my-[10px] border border-[#ddd] box-border block" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Anto Jumia">Anto Jumia</option>
                    <option value="Kevo Fisi">Kevo Fisi</option>
                    <option value="Faith Kanisa">Faith Kanisa</option>
                    <option value="Brayo Matata">Brayo Matata</option>
                    <option value="Stacy Bardie">Stacy Bardie</option>
                    <option value="Andrew Mpesa">Andrew Mpesa</option>
                </select>

                { !isPending && <button className="bg-[#f1356d] text-white border-0 p-[8px] rounded-[8px] cursor-pointer mt-5">Add Blog</button> }
                { isPending && <button className="bg-[#f1356d] text-white border-0 p-[8px] rounded-[8px] cursor-pointer mt-5">Adding Blog .....</button> }

            </form>
            
        </div>

    )

}

export default Create;