import { createContext, useContext, useState } from "react";
import {randomUUID} from 'expo-crypto'


export const CartContext = createContext({});

const CartProvider = ({children}) => {
    const [items,setItems] = useState([]);

    const addItems = (product) => {
        const newCartItem = {
            id: randomUUID(),
            product,
            product_id:product.id,
            quantity:1
        }
        setItems([...items,newCartItem])
    }

    const updateQuantity = (itemId,amount) => {
        console.log(items)
        const updatedItems = items.map((item) => {
            return (item.id !== itemId ? item: {...item,quantity: item.quantity+amount})
        })
        .filter((item) => item.quantity > 0)
        // setItems(items.map((item) => {
        //     item.id !== itemId ? item: {...item,quantity: item.quantity+amount}
        // }))
        console.log(updatedItems)
        setItems(updatedItems)
    }


    return(
        <CartContext.Provider value={{items, addItems,updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);