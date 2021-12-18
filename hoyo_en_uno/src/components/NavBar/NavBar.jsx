import BagWidget from "./BagWidget"
import { Link } from 'react-router-dom';
import "./NavBar.css"
import { useCartContext } from "../context/CartContext"

const NavBar = () => {
    const { itemsCarrito } = useCartContext()
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
                    <Link to="/cart">
                        <BagWidget />
                        
                        {itemsCarrito()}

                    </Link> 
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar
