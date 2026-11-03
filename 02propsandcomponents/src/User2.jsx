// Default Props And Default Values

function User2({name="vishesh",age=24}){
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    )
}

export default User2;