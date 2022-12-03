import React, {useState} from "react";

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
                <button onClick={handleSubstract}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <div className="itemcount_btns">
                <button onClick={() => onAddToCart(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default Counter;