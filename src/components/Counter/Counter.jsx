import React, {useState} from "react";
import { Button } from 'react-bootstrap';

function Counter({stock, onAddToCart}){
    let [count, setCount] = useState(1)

    function handleAdd(){
        if (count < stock)
            setCount(count+1);
    }

    function handleSubstract(){
        if (count > 1)
            setCount(count-1);
    }

    return (
        <div className="itemcount_container">
            <div className="itemcount_control">
                <Button onClick={handleSubstract} variant="danger" size="sm">-</Button>
                <span>{count}</span>
                <Button onClick={handleAdd} variant="success" size="sm">+</Button>
            </div>
            <div className="itemcount_btns">
                <Button onClick={() => onAddToCart(count)} variant="info" size="sm">Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default Counter;