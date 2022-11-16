import { useState, useEffect } from 'react';
import CardSingleItem from './ItemDetail';
import {getSingleItem} from "../../Services/mockService";
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const {idItem} = useParams();

  async function getItemAsync() {
      let response = await getSingleItem(idItem);
      setProduct(response);
    }

  useEffect(() => {
      getItemAsync();
    },[]);

    return (
      <div className='item-list'>
        <CardSingleItem product={product}/> 
      </div>
    );
}

export default ItemDetailContainer;