import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"
import axios from "axios";

export const FullBlog = ({ blog }: {blog: Blog}) => {

    const navigate = useNavigate();
    console.log("log blog" ,blog);
const id = blog.id;
console.log(id);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function handleDelete(id:any ) {

        const blogId = id;
        console.log("Blog ID", blogId);
    
        try {
            const response = await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            console.log("Blog deleted successfully:", response.data);
             
            navigate("/blogs")
            // Optionally, you can perform any additional actions here after successful deletion
        } catch (error) {
            console.error("Error deleting blog:", error);
            // Handle error scenarios here
        }
    }


    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid  lg:grid-cols-2 px-10 w-full pt-200 max-w-screen-xl pt-12  justify-between ">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd December 2023
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 mt-10">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full mt-3">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>  
                </div>
                <button 
      onClick={() => handleDelete(id)}
      className= " cursor-pointer h-10 mt-[6rem] text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
          Delete
      </button>
            </div>
        </div>
    </div>
}