import React, {memo} from "react";
import CardItem from "./Item";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemList ({products}) {
  return (
    <div className='item-list'>
      <Row>
        {products.map((product) =>{
            return (
              <Col lg={2}>
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
              </Col>
            );
        })}      
      </Row>
    </div>
  );    
}

export default memo(ItemList);
