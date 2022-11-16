import { useState, useEffect } from 'react';
import CardItem from './Item.jsx';
import getItems from "../../Services/mockService";
import {useParams} from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams();
  
  async function getItemsAsync() {
    let response = await getItems(idCategory);
    setProducts(response);
  }

  useEffect(() => {
      getItemsAsync();
    },[idCategory]);

  const styleH1 = {color: "white"};
  let titulo = <h1 style={styleH1}>TODOS LOS PRODUCTOS</h1>;
    return (
      <div className='item-list'>
        {titulo}
        {products.map((product) =>{
          return (
            <CardItem
              key={product.id}
              id={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              stock={product.stock}
            />
          );
        })}
      </div>
    );
}

export default ItemListContainer;