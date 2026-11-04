// Search Filtering

import {  useState,useMemo } from "react";

function SearchProducts(){
    const [search,setSearch]=useState("");

    const products=[
        "laptop",
        "mobile",
        "tablet",
        "keyboard",
        "mouse",
        "tab"
    ];

    const filterProducts=useMemo(()=>{
        return products.filter(product=>
            product.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );
    },[search]);

    return (
        <div>
            <input 
                value={search}
                onChange={e=>setSearch(e.target.value)}
                placeholder="Search Product"/>


            {filterProducts.map(product => (
        <p key={product}>{product}</p>
      ))}
        </div>

        
    )
}

export default SearchProducts;