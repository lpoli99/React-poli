import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { cartContext } from "../../context/cartContext";

function CartView() {
    const {cart} = useContext(cartContext);
    if(cart.length === 0 ) return <h1>Carrito Vacío!</h1>;
    return (
        <div className="cart-container">
            {cart.map((item) =>(
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <h4>${item.price}</h4>
                    <h4>Cantidad: {item.count}</h4>
                    <Button variant="danger" size="sm">X</Button>
                </div>
            ))}
            <Button variant="info" size="sm">Vaciar Carrito</Button>
        </div>
    );
   
}

export default CartView;