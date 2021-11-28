import BagWidget from "./BagWidget"
import { Link } from 'react-router-dom';
import "./NavBar.css"


const NavBar = () => {
    return (
        <nav id="navbar">
            <ul >
                <li>
                <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/categoria/palos">PALOS</Link>
                </li>
                <li>
                    <Link to="/categoria/bolsas">BOLSAS</Link>
                </li>
                <li>
                    <Link to="/categoria/guantes">GUANTES</Link>
                </li>
                <li>
                    <Link to="/categoria/accesorios">ACCESORIOS</Link>
                </li>
                <li>
                    <BagWidget/>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar
