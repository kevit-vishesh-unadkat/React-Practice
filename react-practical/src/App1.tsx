import {useState} from 'react';
function App1(){

    const [dark,setDark]=useState<Boolean>(false);

    const styles = {
    backgroundColor: dark ? "#222" : "#fff",
    color: dark ? "#fff" : "#222",
    minHeight: "100vh",
    padding: "30px",
  };


    return(
        <div style={styles}>
            <h1>{dark?"Dark Mode":"Light Mode"}</h1>

            <p>Welcome to react with TypeScript</p>

            <button onClick={()=>setDark(!dark)}>
                switch to {dark?"Light":"Dark"}
            </button>
        </div>
    )
}

export default App1;