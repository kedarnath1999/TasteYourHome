import { createContext, useContext, useState } from "react";


export const CartContext = createContext({});

const CartProvider = ({children}) => {
    const [items,setItems] = useState([]);

    const addItems = (item) => {
        setItems([...items,item])
    }

    return(
        <CartContext.Provider value={{items, addItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);