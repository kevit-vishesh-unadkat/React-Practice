// Lazy Initiallization 

import { useState } from "react";

function Product(){
    const [product,setProduct]=useState(()=>{
        console.log("Initializing a products");

        return ["Laptop","Mobile","Tablet"];
    });

    return <h2>{product.length} Products</h2>


}

export default Product;