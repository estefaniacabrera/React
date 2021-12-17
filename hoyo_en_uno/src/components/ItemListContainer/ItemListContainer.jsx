import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';
//import getFetch from './getFetch';
import Load from './Load';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';

const ItemListContainer = () => {

    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
    const { catIdParams } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = db.collection('productos')
        const dbQueryWhere =  catIdParams ? dbQuery.where('category', '==', catIdParams) : dbQuery
        dbQueryWhere.get()
        .then(data => setProductos(data.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [catIdParams])
    
    return (
        <><div>
            {loading ? <Load /> :
                <ItemList lista = {productos} />
            }
        </div></>
        

    )
}
export default ItemListContainer;