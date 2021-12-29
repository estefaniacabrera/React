import { useCartContext } from "../context/CartContext"
import { Link } from 'react-router-dom';


function Cart() {

    const { botonCarrito, cartList, vaciarCarrito, precioTotal, itemsCarrito } = useCartContext()
    console.log(cartList)

    return (
        <div>
            {cartList.map( item => <li key={item.id}>{item.cantidad}u - {item.name}</li>)  }
            
            <h2>El precio total es ${precioTotal()}</h2>
            <h2>Cantidad {itemsCarrito()}</h2>
            <br />
            <h3>Nombre<input type="text" /></h3>
            <br />
            <br />
            <h3>Apellido<input type="text" /></h3>
            <br />
            <button onClick={() => vaciarCarrito()}>
                <Link to="/">{botonCarrito}</Link>
            </button>
            
        </div>
    )
}

export default Cart
