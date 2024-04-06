import { Avatar } from "./BlogCard"
import { Link,useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate = useNavigate();

    function handleLogout () {
        localStorage.removeItem("token");
        navigate("/");  
    }
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer text-2xl font-bold">
                Medium
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Create Blog</button>
            </Link>
            <a onClick={handleLogout}>
                <button type="button" className="mr-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Logout</button>
            </a>

            <Avatar size={"big"} name="harkirat" />
        </div>
    </div>
}