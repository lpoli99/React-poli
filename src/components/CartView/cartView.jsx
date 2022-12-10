import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../Services/firestore";
import { useNavigate } from "react-router-dom";
import CartForm from "./CartForm";

function CartView() {
    const {cart} = useContext(cartContext);
    const navigate = useNavigate();
    if(cart.length === 0 ) 
        return (
            <div className="cart-container">
                <h1>¡El carrito está vacío!</h1>
            </div>
        ); 
    
    async function handlePayment(e, data){
        const order = {
            buyer: data,
            items: cart,
            total: 0,
            date: new Date(),
        };
        const idOrder = await createOrder(order);
        navigate(`/finish/${idOrder}`);
    }
    return (
        <div className="cart-container">
            <div className="cart-itemsList">
                {cart.map((item) =>(
                    <div key={item.id} className="cart-items">
                        <h2>{item.title}</h2>
                        <h4>${item.price}</h4>
                        <h4>Cantidad: {item.count}</h4>
                        <Button variant="danger" size="sm">X</Button>
                    </div>
                ))}
            </div>
            <Button variant="info" size="sm">Vaciar Carrito</Button>
            <CartForm onSubmit={handlePayment}/>
        </div>
    );
   
}

export default CartView;