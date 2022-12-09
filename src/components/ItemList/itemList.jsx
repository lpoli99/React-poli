import React, {memo} from "react";
import CardItem from "./Item";

function ItemList ({products}) {
  return (
    <div className='item-list'>
      {products.map((product) =>{
          return (
            <CardItem
              key={product.id}
              id={product.id}
              img={product.img}
              discount={product.discount}
              title={product.title}
              price={product.price}
              stock={product.stock}
              category={product.category}
            />
          );
      })}       
    </div>
  );    
}

export default memo(ItemList);
