import { FaWallet } from "react-icons/fa";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="brand">
                <FaWallet className="brand-icon" />
                <h2>ExpenseTracker</h2>
            </div>

            <div className="nav-profile">
               <span>My Account</span>
               <div className="avatar">U</div>
            </div>
        </nav>
    )
}

export default Navbar;