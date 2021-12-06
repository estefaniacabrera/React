import React from 'react';
import { Col } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../context/CartContext';



const ItemDetails =  ( {item} ) => {

    const { cartList, agregarProducto } = useCartContext()

    function onAdd(cant) {
        agregarProducto({ item: item, cantidad: cant })
    }
    console.log(cartList)

    return (
        <>
            <Col>
                <div className='card w-50'>
                    <div className="container">
                        <label>{item.name}</label>
                    </div>
                    <div className="container">
                        <img src={item.foto} className="w-25" alt={item.foto} />
                        <br />
                    </div>
                    <div className="container">
                        <label>{item.price}</label>
                    </div>
                </div>
            </Col>
            <Col>
                <br />
                <ItemCount onAdd={()=>onAdd()} initialstock={item.stock} />
            </Col></>
                
    )
}
export default ItemDetails;