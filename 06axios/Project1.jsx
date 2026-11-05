import axios from "axios";
import { useState } from "react";

async function Project1(){

    try{
        const response=await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log(response.data);
    }
    catch(error){
        console.log(error.message);
    }
}

export default Project1;