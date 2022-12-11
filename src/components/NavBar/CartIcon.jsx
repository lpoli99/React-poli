import React, {useContext} from "react";
import {cartContext} from "../../context/cartContext";


function CartIcon() {
  const miContext = useContext(cartContext);
  return (
    <>
      <span>🛒</span>
      <small style={{color: "white"}}>{miContext.itemsInCart()}</small>
    </>
  )
}

export default CartIcon;