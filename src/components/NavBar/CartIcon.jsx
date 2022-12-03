import React, {useContext} from "react";
import {cartContext} from "../../context/cartContext";


function CartIcon() {
  const miContext = useContext(cartContext);
  return (
    <>
      <a href="#">🛒</a>
      <span style={{color: "white"}}>{miContext.itemsInCart()}</span>
    </>
  )
}

export default CartIcon;