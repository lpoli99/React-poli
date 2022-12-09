import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../ItemList/Counter';
import { useContext, useState } from "react";
import {cartContext} from "../../context/cartContext";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardSingleItem({product}) {
  const [isInCart, setIsInCart] = useState(false);
  const {addToCart} = useContext(cartContext);

  function onAddToCart(count){
    setIsInCart(count);
    addToCart(product, count);
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Descripcion: {product.description}.  
          Precio: ${product.price}
        </Card.Text>
        {
          isInCart ? <Link to="/cart"><Button variant='warning' size='sm'>Ir al carrito</Button></Link> : <Counter stock={product.stock} onAddToCart={onAddToCart}/>
        }
        
      </Card.Body>
    </Card>
  );
}

export default CardSingleItem;
    