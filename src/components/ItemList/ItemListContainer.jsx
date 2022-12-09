import { useState, useEffect } from 'react';
import getItems from "../../Services/mockService";
import {useParams} from "react-router-dom";
import ItemList from './itemList.jsx';
import Loader from '../Loader/loader';

function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const {idCategory} = useParams();
  
  async function getItemsAsync() {
    let response = await getItems(idCategory);
    setProducts(response);
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