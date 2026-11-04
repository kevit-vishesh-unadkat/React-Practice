// Expensive Calculation 

// imagine an app.lication that calculates the totla price of many products


import { useMemo, useState } from "react";

function ProductList(){
    const [products]=useState([
        {id:1,name:"laptop",price:50000},
        {id:2,name:"mobile",price:20000},
        {id:3,name:"tablet",price:15000}
    ]);

    const [count,setCount]=useState(0);

    const totalPrice=useMemo(()=>{
        console.log("Calculatig Total");

        return products.reduce(
            (total,product)=>total + product.price,0
        );
    },[products]);

    return (
        <div>
            <h2>Total Price : {totalPrice}</h2>

            <h2>Counter : {count}</h2>

            <button onClick={()=>setCount(prev=>prev+1)}>
                Increment
            </button>
        </div>
    );
}

export default ProductList;