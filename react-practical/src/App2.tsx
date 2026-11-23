import { useState } from "react";

function App2(){
    const [liked,setLiked]=useState<boolean>(false);
    const [likes,setLikes]=useState<number>(10);

    const handleLike=()=>{
        setLiked((prev)=>!prev);
        setLikes((prev)=>liked?prev-1:prev+1);
    };

    return (
        <div>
            <h2>My First Post</h2>

            <p>Learning React with TypeScript</p>

            <button onClick={handleLike}>
                {liked?"Unlike ❤️" : "Like 🤍"}
            </button>

            <h3>Total Likes: {likes}</h3>
        </div>
    );
}

export default App2;