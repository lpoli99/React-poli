import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../Services/firestore";
import { useNavigate } from "react-router-dom";
import CartForm from "./CartForm";
import "./cartView.css";

function CartView() {

    const {cart, cartTotal, removeItemCart, clearCart} = useContext(cartContext);
    const navigate = useNavigate();
    if(cart.length === 0 ) 
        return (
            <div className="cartContainer">
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
                        <h2 className="cartTitle">{item.title}</h2>
                        <h4>Precio: ${item.price}</h4>
                        <h4>Cantidad: {item.count}</h4>
                        <Button variant="danger" size="sm" onClick={removeItemCart}>🗑</Button>
                    </div>
                ))}
                <h3>Total: ${totalP}</h3>
            </div>
            <Button variant="info" size="sm" onClick={clearCart}>Vaciar Carrito</Button>
            <CartForm onSubmit={handlePayment}/>
        </div>
    );
   
}

export default CartView;