// javasscript example 


// function greet(name){
//     return `Hello ${name}`;
// }

// console.log(greet("vishesh"))



// this is one way to pass a props to function 

// function Greeting({name}){
//     return (
//         <h1>Hello {name}</h1>
//     )
// }

// export default Greeting;


// this is the another way to pass a prop to the function 

function Greeting(props){
    return (
        <h1>Hello {props.name}</h1>
    )
}

export default Greeting;