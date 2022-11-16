import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../ItemList/Counter';

function CardSingleItem({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Descripcion: {product.description}.  
          Precio: ${product.price}
        </Card.Text>
        <Counter stock={product.stock}/>
        <Button variant="primary">Añadir al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardSingleItem;
    