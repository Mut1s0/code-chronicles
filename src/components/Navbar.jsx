import Logo from "../assets/code-circle-svgrepo-com.svg";
import { Link } from "react-router-dom";

function Navbar() {

    return(

        <nav className="p-[20px] flex items-center max-w-[600px] mx-auto border border-b-[#f2f2f2]">

            <Link to="/">

                <div className="flex flex-row-reverse gap-[10px]">

                    <h1 className="text-[#dc2626] font-semibold cursor-pointer">Code Chronicles</h1>

                    <img src={Logo} alt="Logo" className="w-[25px]" />

                </div>

            </Link>

            <div className="ml-auto">

                <Link to="/" className="ml-[16px] decoration-none p-[6px] hover:text-[#a3e635]">Home</Link>
                <Link to="/create" className="ml-[16px] decoration-none p-[6px] hover:text-[#f1356d]">New Blog</Link>

            </div>

        </nav>
    )
}

export default Navbar;