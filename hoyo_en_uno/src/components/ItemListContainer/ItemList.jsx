import React from "react";
import Item from "./Item";

const ItemList = (props) => {
    console.log('este es el props.lista' + props.lista);
    console.log(props.lista)
   
    return (
        <div>
            {props.lista.map((item, index) => {
                return (
                    <Item key={index} item={item} />
                )
            })}
        </div>
    )
}
export default ItemList;