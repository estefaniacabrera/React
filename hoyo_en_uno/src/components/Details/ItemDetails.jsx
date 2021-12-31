import {useState } from 'react'
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
                <div className="card mb-3 text-center">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={item.foto} className="img-fluid rounded-start" alt={item.name}></img>
                        </div>
                        <div className="col-md-8 mt-5">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><small class="text-muted">${item.price}.-</small></p>
                                <br />
                                <ItemCount onAdd={onAdd} count={count} initialstock={item.stock}/>
                            </div>
                        </div>
                    </div>
                </div></>
                
    )
}
export default ItemDetails;