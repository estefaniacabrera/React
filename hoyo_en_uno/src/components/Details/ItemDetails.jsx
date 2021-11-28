import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetails = ({ item }) => {
    
    return (
        
         <div>
            <img src={item.foto} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <ItemCount stock={item.stock} id={item.id} />
        </div>
                
    )
}
export default ItemDetails;