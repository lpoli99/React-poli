import { useState, useEffect } from 'react';
import getItems, { getItemsByCat } from "../../Services/firestore";
import {useParams} from "react-router-dom";
import ItemList from './itemList.jsx';
import Loader from '../Loader/loader';

function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const {idCategory} = useParams();
  
  async function getItemsAsync() {
    if (!idCategory){
      let response = await getItems();
      setProducts(response);
    } else {
      let response = await getItemsByCat(idCategory);
      setProducts(response);
    }
  }

  useEffect(() => {
      getItemsAsync();
    },[idCategory]);

  
    return (
      <div className='catalogo'>
        {products ? <ItemList products={products}/> : <Loader/>}
      </div>
    );
}

export default ItemListContainer;