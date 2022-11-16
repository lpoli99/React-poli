import React from "react";

function Counter(props){
    let [count, setCount] = React.useState(1)

    function handleAdd(){
        if (count < props.stock)
            setCount(count+1);
    }

    function handleSubstract(){
        if (count > 1)
            setCount(count-1);
    }

    return (
        <div>
            <button onClick={handleSubstract}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default Counter;