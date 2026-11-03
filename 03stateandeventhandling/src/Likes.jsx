// Practical Example of Likes and DisLikes

import { useState } from "react";

function Likes(){
    const [likes,setLikes]=useState(0);

    const [dislikes,setDislikes]=useState(0);

    function handleLikes(){
        setLikes(prev=>prev+1)
    }

    function handleDislikes(){
        setDislikes(prev=>prev-1)
    }

    return (
        <div>
            <h1>React Post</h1>

            <p>Likes : {likes}</p>

            <p>DisLikes : {dislikes}</p>

            <button onClick={handleLikes}>
                Likes
            </button>

            <button onClick={handleDislikes}>
                DisLikes
            </button>
        </div>
    )
}

export default Likes;