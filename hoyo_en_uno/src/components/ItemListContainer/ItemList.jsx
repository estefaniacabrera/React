import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFetch } from './getFetch';
import Load from './Load';

export const ItemList = () => {
    const [products, setProducts] = useState([])  
    const [loading, setLoading] = useState(true)  
    
    useEffect(() => {
        getFetch
        .then(data => {
            setProducts(data)     
        })
        .catch(err => console.log(err))    
        .finally(()=> setLoading(false))
    },[])
    return (
        <div className="App">
            { loading ? <Load/> :  products.map(prod => <div key={prod.id} className="row row-cols-1 row-cols-md-3 g-4">
                                            <div className="col">
                                                <div className="card">
                                                    <img src= {prod.foto} className="card-img-top" alt="foto"/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{prod.name}</h5>
                                                        <p className="card-text">{prod.price}</p>
                                                    </div>
                                                    <a href="index.js" className="btn btn-primary">Comprar</a>
                                                </div>
                                            </div> 
                                            </div> 
            )} 
        
        </div>
    )
}
