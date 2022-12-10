import React from "react";
import { useParams } from "react-router-dom";

function Finish(){
    const idOrder = useParams().idOrder;
    return(
        <div className="finish-container" style={{color: "white"}}>
            <h1>¡Gracias por tu compra!</h1>
            <h3>El ID de tu orden de compra es: {idOrder}</h3>
        </div>
    );
}

export default Finish;