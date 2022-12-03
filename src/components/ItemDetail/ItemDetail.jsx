import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../ItemList/Counter';
import { useContext } from "react";
import {cartContext} from "../../context/cartContext";

function CardSingleItem({product}) {
  const {addToCart} = useContext(cartContext);

  function onAddToCart(count){
    alert(`Agregaste ${count} items al carrito!`);
    addToCart(product, count)
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
        <Counter stock={product.stock} onAddToCart={onAddToCart}/>
      </Card.Body>
    </Card>
  );
}

export default CardSingleItem;
    