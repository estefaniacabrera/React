import { useCartContext } from "../context/CartContext"


function Cart() {

    const { cartList, vaciarCarrito } = useCartContext()
    console.log(cartList)

    return (
        <div>
            {cartList.map(({ item }, index) => <li key={index}> {item.name} { item.stock}</li>)  }
            <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart
