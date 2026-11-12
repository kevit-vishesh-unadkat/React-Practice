// Displaying API data using props and Components


import { useState, useEffect } from "react";
import PostList from "./PostsList";


function Posts2(){
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        const getPosts=async()=>{
            const response=await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            const data=await response.json();

            setPosts(data);
        }
        getPosts();
    },[]);

    return (
        <div>
            <h1>Post Application</h1>

            <PostList posts={posts}/>
        </div>
    );
}

export default Posts2