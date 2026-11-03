// Default valus with Objects

// function Product1({
//     product={
//         name:"Unknown Product",
//         price:0
//     }
// }){
//     return (
//         <div>
//             <h2>{product.name}</h2>
//             <p>{product.price}</p>
//         </div>
//     )
// }

// export default Product1;


// Passing multiple props


function Product1({name,price,category,brand,available}){
    return(
        <div>
            <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>
      <p>Brand: {brand}</p>
      <p>
        {available ? "Available" : "Out of Stock"}
      </p>
        </div>
    );
}

export default Product1;



// you can pass a props using spread operator also 

// const product={
//     name:"Laptop",
//     price:25000
// }

{/* <Product {...product} /> */}