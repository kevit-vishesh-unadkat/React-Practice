// create themeContext.jsx

// example to practice useaContext

import { useState,createContext } from "react";

export const ThemeContext= createContext();

export const ThemeProvider=({childern})=>{
    const [theme,setTheme]=useState("light");

    const toggleTheme=()=>{
        setTheme((prevTheme)=>
            prevTheme==="light"?"dark":"light"
        );
    };

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {childern}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;