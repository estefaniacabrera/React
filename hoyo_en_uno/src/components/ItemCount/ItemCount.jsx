import { useState } from "react"
import { Link } from 'react-router-dom';

 const ItemCount = ({ onAdd, initialstock}) => {
    const [count, setCount] = useState(1)

    function SumProd() {
        if (count < initialstock) {
            setCount (count + 1)
        } 
    }
    function Subtract() {
        if (count > 0) {
            setCount (count - 1)
        } 
     }
    function quantityCount() {
        onAdd(count)
     }

    return (
        <div>
            <button type="button" className="btn btn-outline-success" onClick={Subtract}>-</button>
                {count}
            <button type="button" className="btn btn-outline-success" onClick={SumProd}>+</button>
            <br />
            <button type="button" className="btn btn-success ms-3 me-3 mt-3" onClick={quantityCount}>Agregar al Carrito</button>
            <button type="button" className="btn btn-success ms-3 me-3 mt-3">
                <Link to="/" style={{textDecoration: "none", color:"white"}}>Volver al Inicio</Link>
            </button> 
        </div>
    )
}

export default ItemCount
