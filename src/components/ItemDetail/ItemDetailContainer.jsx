import { useState, useEffect } from 'react';
import CardSingleItem from './ItemDetail';
import {getSingleItem} from "../../Services/mockService";
import {useParams} from "react-router-dom";
import Loader from '../Loader/loader';

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {idItem} = useParams();

  async function getItemAsync() {
      getSingleItem(idItem).then(response=>{
        setProduct(response);
        setIsLoading(false);

      });
    }

  useEffect(() => {
      getItemAsync();
  },[]);

  if(isLoading)
    return (<Loader/>);
    
  return (
    <div className='item-list'>
      <CardSingleItem product={product}/> 
    </div>
  );
}

export default ItemDetailContainer;