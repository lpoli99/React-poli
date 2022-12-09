import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function CardItem({title, img, price, discount, id}) {
  const urlDetail = `/detail/${id}`;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Precio: ${price}
          <br></br>
          {discount && <small style={{color: "green"}}>Descuento: {discount}%</small>}
        </Card.Text>
        <Link to={urlDetail}>
          <Button variant="info" size="sm">Ver Más</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardItem; 