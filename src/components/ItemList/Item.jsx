import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter.jsx';
import {Link} from "react-router-dom";

function CardItem({title, img, price, stock, id}) {
  const urlDetail = `/detail/${id}`;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Precio: ${price}
        </Card.Text>
        <Counter stock={stock}/>
        <Link to="{urlDetail}">
          <Button>Ver Más</Button>
        </Link>
        <br></br>
        <Button variant="primary">Añadir al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem; 