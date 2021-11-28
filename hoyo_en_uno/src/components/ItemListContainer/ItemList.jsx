import React from "react";
import Item from "./Item";

const ItemList = (props) => {
   
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