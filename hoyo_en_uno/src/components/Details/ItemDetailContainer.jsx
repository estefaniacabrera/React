import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getFetch from '../ItemListContainer/getFetch';
import ItemDetails from './ItemDetails';


const ItemDetailContainer = () =>{
    
    const [productoIndividual, setProductoIndividual]= useState({});
    const [loading, setLoading] = useState(true);
    const { itemIdParams } = useParams();

      useEffect(() => {

          getFetch.then((prodEncontrado)=>{
              setProductoIndividual(prodEncontrado) 
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
        <p style={{fontSize: 20, color: "black"}}> 
            Lista 
        </p>
        <div>
            {loading 
                ? 
            <h1>Cargando..</h1> 
                : 
            <ItemDetails item={productoIndividual}/> }
        </div>
    </>
    )
    };

export default ItemDetailContainer