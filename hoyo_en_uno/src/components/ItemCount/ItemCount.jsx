import {useState} from "react"

const ItemCount = ({ initial, initialstock, AddCart }) => {
    const [count, setCount] = useState(1)

    function SumProd() {
        if (count < initialstock) {
            setCount (count + 1)
        } 
    }
    function Subtract() {
        if (count < initialstock && count > 0) {
            setCount (count - 1)
        } 
    }
    function Agregar() {
        AddCart(count)
        setCount(1)
    }

    return (
        <div>
            <button type="button" className="btn btn-outline-success" onClick={SumProd}>+</button>
                {count}
            <button type="button" className="btn btn-outline-success" onClick={Subtract}>-</button>
            <button type="button" className="btn btn-success" onClick={Agregar}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
