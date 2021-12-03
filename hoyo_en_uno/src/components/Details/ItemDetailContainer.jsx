import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getFetch from '../ItemListContainer/getFetch';
import Load from '../ItemListContainer/Load';
import ItemDetails from './ItemDetails';


const ItemDetailContainer = () =>{
    
    const [productoIndividual, setProductoIndividual]= useState({});
    const [loading, setLoading] = useState(true);
    const { itemIdParams } = useParams();

      useEffect(() => {

          getFetch.then((data) => {
              setProductoIndividual(data.find(prod => prod.id === parseInt(itemIdParams))) 
          })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        }, [itemIdParams])
     

    console.log(productoIndividual);

    return(
    <>
        <div>
                {loading
                ? 
            <Load/> 
                : 
                    <ItemDetails item={productoIndividual}/> }
        </div>
    </>
    )
    };

export default ItemDetailContainer