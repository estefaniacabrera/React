import {useState } from 'react'
import { Col } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../context/CartContext';



const ItemDetails =  ( {item} ) => {
    const [count, setCount] = useState(1)

    const { cartList, agregarProducto } = useCartContext()

    function onAdd(cant) {
        setCount(cant)
        agregarProducto({  ...item, cantidad: cant})
    }
    console.log(cartList)

    return (
        <>
            <Col>
                <div className='card w-90'>
                    <div className="container">
                        <label>{item.name}</label>
                    </div>
                    <br />
                    <div className="container">
                    <img src={item.foto} className="w-25" alt={item.foto} />
                    <br />
                    </div>
                    <div className="container">
                        <label>{item.description}</label>
                    </div>
                    <div className="container">
                        <label>${item.price}</label>
                    </div>
                </div>
            </Col>
            <Col>
                <br />
                <ItemCount onAdd={onAdd} count={count} initialstock={item.stock}/>

            </Col></>
                
    )
}
export default ItemDetails;