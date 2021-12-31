import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <>
            <Col className="mb-3" md={4}>
                <Card key={item.id} className="mb-3 mt-10 text-center h-100">
                        <img src={item.foto} className="card-img-top" alt={item.name} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">${item.price}.-</p>
                        </div>
                        <Link to={`/detalle/${item.id}`}>
                            <button className="btn btn-outline-success">
                                Detalle del producto
                            </button>
                        </Link>
                </Card>
            </Col></>
        
    )
}

export default Item
