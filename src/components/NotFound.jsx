import { Link } from "react-router-dom";
import errorIcon from "../assets/not-found-2384304_640.jpg";

function NotFound() {

    return(

        <div className="overflow-hidden">

            <div>

                <div>

                    <img src={errorIcon} alt="Ghost Animation" />

                </div>

                <div className="home__data text-center pt-[20px]">

                    <h1 className="home__title text-[60px]">Hey Buddy</h1>

                    <p className="home__description text-[18px] font-extralight">We can't seem to find the page <br />you are looking for</p>

                    <Link to="/" className="text-[15px] text-rose-700 font-bold cursor-pointer mt-[15px] block">Back to Home Page</Link>

                </div>


            </div>

        </div>
    )
}

export default NotFound;