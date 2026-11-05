import { NavLink } from "react-router-dom";
import Home from "./Home";
import About from './About'

function Navbar(){
    return (
        <nav>
            <NavLink to="/">Home</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Navbar;