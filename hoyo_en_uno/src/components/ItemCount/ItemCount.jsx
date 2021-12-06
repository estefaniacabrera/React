import {useState} from "react"

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

    return (
        <div>
            <button type="button" className="btn btn-outline-success" onClick={SumProd}>+</button>
                {count}
            <button type="button" className="btn btn-outline-success" onClick={Subtract}>-</button>
            <button type="button" className="btn btn-success" onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
