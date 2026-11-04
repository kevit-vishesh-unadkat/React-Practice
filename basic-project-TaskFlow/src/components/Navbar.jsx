
import { ThemeContext } from '../../../04hooks/src/ThemeContext';


function Navbar(){
    const {theme,toggleTheme}=useContext(ThemeContext);

    return (
        <nav className='navbar'>
            <h2>TaskFLow</h2>

            <button onClick={toggleTheme}>
                {theme==="light"?"Dark Mode":"Light Mode"}
            </button>
        </nav>
    );
}

export default Navbar;