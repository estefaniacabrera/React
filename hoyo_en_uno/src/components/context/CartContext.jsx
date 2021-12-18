import { useState, createContext, useContext } from 'react'

const CartContext= createContext([])
 
export const  useCartContext =()=> useContext(CartContext)


function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])

    const vaciarCarrito=()=>{
        setCartList([])
    }

    const precioTotal =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.cantidad * valor.price)), 0) 
    }
    const itemsCarrito =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.cantidad * 1)), 0) 
    }

    const cantidadProducto = () =>{
        return cartList.reduce( (acum, item)=> acum = acum + item.cantidad , 0)
    }
    const agregarProducto =(item)=>{
        const index = cartList.findIndex(i => i.id === item.id)
  
        if (index > -1) {
          const oldQy = cartList[index].cantidad

          cartList.splice(index, 1)
          setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy}])
        } else {
          setCartList([...cartList, {...item, cantidad: item.cantidad}])
        }
    }



    return(
        <CartContext.Provider value={{
            cartList, 
            agregarProducto,
            vaciarCarrito,
            precioTotal,
            cantidadProducto,
            itemsCarrito
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
