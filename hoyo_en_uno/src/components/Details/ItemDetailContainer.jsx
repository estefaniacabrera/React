import React from 'react';
import { useEffect, useState } from 'react';
//import getFetch from '../ItemListContainer/getFetch';
import Load from '../ItemListContainer/Load';
import ItemDetails from './ItemDetails';
import { getFirestore } from '../firebase/firebase'
import { useParams } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const ItemDetailContainer = () =>{
    
    const [productoIndividual, setProductoIndividual]= useState({});
    const [loading, setLoading] = useState(true);
    const { idProducto } = useParams()
    
    useEffect(() => {
        const db = getFirestore();
        const dbQuery = db.collection('productos')
        dbQuery.doc(idProducto).get()
            .then(res => {   
                setProductoIndividual({ id: res.id, ...res.data() })
                console.log(res);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
         // eslint-disable-next-line 
    },[idProducto])


    return(
    <>
        <Col className="mb-3 ms-5 me-5">
                {loading
                ? 
            <Load/> 
                : 
                    <ItemDetails item={productoIndividual}/> }
        </Col>
    </>
    )
    };

export default ItemDetailContainer