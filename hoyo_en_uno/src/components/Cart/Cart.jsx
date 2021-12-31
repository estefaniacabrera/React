import { useCartContext } from "../context/CartContext"
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { getFirestore } from "../firebase/firebase";

function Cart() {
    
    const [idOrder, setIdOrder] = useState('')

    const {cartList, vaciarCarrito, precioTotal, itemsCarrito } = useCartContext()

    const generarOrden = (e)=> {
        e.preventDefault()
        
        const orden = {}   

        orden.buyer = {nombre: 'Estefania', email:'estefaniacabrera13@gmail.com', tel: '12345678'}
        orden.total =  precioTotal()

        orden.items = cartList.map(itemsCarrito => {
            const id = itemsCarrito.id
            const nombre = itemsCarrito.name
            const cantidad = itemsCarrito.cantidad
            const precio = itemsCarrito.price

            return {id, nombre, cantidad, precio}   
        })

        const db = getFirestore()
        db.collection('cartlist').add(orden)
        .then(resp => setIdOrder(resp.id))
    

    }



    
    console.log(cartList)

    return (
        <Container>
            <Row>
                <Col>
                    <div className="card mb-3 text-center">
                        <br />
                        <br />
                        {cartList.map( item => <li key={item.id}>{item.cantidad}u - {item.name}</li>)  }
                        <br />
                        <br />
                        <h5>EL TOTAL DE SU CARRITO ES ${precioTotal()}.-</h5>
                        <br />
                        {idOrder !== '' && <label>Su número de pedido es: {idOrder}</label>}
                        <form onSubmit={generarOrden}>
                            <button className="btn btn-success ms-3 me-3 mt-3">Enviar Orden</button>
                        </form>
                        <br />
                    </div>
                    <div className="card mb-3 text-center">
                        <button className="btn btn-success ms-3 me-3 mt-3" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                    </div>
                </Col>
            </Row>            
        </Container>
    )
}

export default Cart
