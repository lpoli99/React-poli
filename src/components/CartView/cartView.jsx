import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../Services/firestore";
import { useNavigate } from "react-router-dom";
import CartForm from "./CartForm";

function CartView() {

    const {cart, cartTotal, removeItemCart} = useContext(cartContext);
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
    const totalP = cartTotal();
    return (
        <div className="cartContainer">
            <div className="cartItemsL">
                {cart.map((item) =>(
                    <div key={item.id} className="cartItems">
                        <h2>{item.title}</h2>
                        <h4>${item.price}</h4>
                        <h4>Cantidad: {item.count}</h4>
                        <Button variant="danger" size="sm" onClick={removeItemCart}>🗑</Button>
                    </div>
                ))}
                <h2>Total: {totalP}</h2>
            </div>
            <Button variant="info" size="sm">Vaciar Carrito</Button>
            <CartForm onSubmit={handlePayment}/>
        </div>
    );
   
}

export default CartView;