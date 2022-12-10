import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../Services/firestore";
import { useNavigate } from "react-router-dom";


function CartView() {
    const {cart} = useContext(cartContext);
    const navigate = useNavigate();
    if(cart.length === 0 ) 
        return (
            <div className="cart-container">
                <h1>Carrito Vacío!</h1>
            </div>
        ); 
    
    async function handlePayment(e){
        const order = {
            buyer: {
                name: "Luciano",
                email: "pepe123456@yimeil.com",
                cellphone: "0303456"
            },
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
            <Button variant="success" size="sm" onClick={handlePayment}>Finalizar Compra</Button>
        </div>
    );
   
}

export default CartView;