import React from 'react';
import { Col } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetails = ({ item }) => {
    
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
                <ItemCount initialstock={item.stock} />                                 
            </Col></>
                
    )
}
export default ItemDetails;
//<img src={item.foto} alt={item.name} />