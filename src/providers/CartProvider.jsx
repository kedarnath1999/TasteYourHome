import { createContext, useContext, useState } from "react";
import {randomUUID} from 'expo-crypto'


export const CartContext = createContext({});

const CartProvider = ({children}) => {
    const [items,setItems] = useState([]);

    const addItems = (product) => {

        const exsistingItem = items.find(
            (item) => item.product === product
        );

        if(exsistingItem){
            updateQuantity(exsistingItem.id,1)
            return
        }

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
        setItems(updatedItems)
    }

    const totalCost = items.reduce((sum, items) => sum + (items.product.price * items.quantity), 0);


    return(
        <CartContext.Provider value={{items, addItems, updateQuantity, totalCost}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);