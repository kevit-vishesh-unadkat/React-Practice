// props differet different cases

// passing number and string as props
// function User(props){
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <p>{props.age}</p>
//         </div>
//     )
// }

// export default User;



// passing boolean as props

function User(props){
    return(
        <p>
            {props.isActive?"Active":"Inactive"}
        </p>
    )
}

export default User;