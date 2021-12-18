import { useCartContext } from "../context/CartContext"


function Cart() {

    const { cartList, vaciarCarrito, precioTotal, itemsCarrito } = useCartContext()
    console.log(cartList)

    return (
        <div>
            {cartList.map( item => <li key={item.id}>{item.cantidad}u - {item.name}</li>)  }
            
            <h2>El precio total es ${precioTotal()}</h2>
            <h2>Cantidad {itemsCarrito()}</h2>
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart
