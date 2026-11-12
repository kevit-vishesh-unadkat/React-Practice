// Fetch and display Posts

import { useEffect, useState } from "react";

function Posts(){
    const [posts,SetPosts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        const fetchPosts=async()=>{
            try{
                const response=await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                if(!response.ok)
                {
                    throw new Error("Somethig Went Wrong");
                }

                const data=await response.json();

                SetPosts(data);
            }
            catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        };
        fetchPosts();
    },[]);

    if(loading){
        return <h2>Loading ....</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }

    return(
        <div>
            <h1>All Posts</h1>

            {posts.map((post)=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default Posts;



