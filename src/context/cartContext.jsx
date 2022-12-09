import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({children}){
    
    const [cart, setCart] = useState([]);
    
    function addToCart(product, count){ 
        let itemAlreadyInCart = cart.findIndex(itemInCart => itemInCart.id === product.id);
        let newCart = [...cart]; 
        if (itemAlreadyInCart !== -1) {
            newCart[itemAlreadyInCart].count += count;
            setCart(newCart);
        }else{       
            product.count = count;
            newCart.push(product);
            setCart(newCart);
        }
    }
    /* function clear ()

    function removeItem(id){

    } */

    /* function priceInCart(){

    } */

    function itemsInCart(){
        let total = 0;
        cart.forEach((itemInCart) => (total = total + itemInCart.count));
        return total;
    }

    const value ={
        itemsInCart,
        cart,
        addToCart,
    };
    return(
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>  
    )
}