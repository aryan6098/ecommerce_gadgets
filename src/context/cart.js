import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {

    const [cart, setCart] = useState({});
    const addToCart= (product)=>{
        setCart((prevCart) => {
            const newCart = {...prevCart};
            if(!prevCart[product.id]) {
                newCart[product.id] = {
                    id: product.id,
                    quantity: 1
                }
            }
            else {
                const newProduct ={...prevCart[product.id]};
                newProduct.quantity += 1;
                newCart[product.id] = newProduct;
            }
            return newCart;
        })
    }

    const removeCart =(product) =>{
        setCart((prevCart)=>{
            const newCart = {...prevCart};

            // if item does not exist in the cart
            if(!prevCart[product.id]) {
                return prevCart;
            }
            // items exist but the Quantity is 1
            else if(prevCart[product.id].quantity === 1){
                delete newCart[product.id]
            }
             //item exists and the quantity is more than 1
            else {
                const newProduct = {...prevCart[product.id]};
                newProduct.quantity -= 1;
                newCart[product.id] = newProduct;
            }
            return newCart;
        })
    }
  return (
    <div>
      <CartContext.Provider value={{cart, addToCart, removeCart}}>{children}</CartContext.Provider>
    </div>
  );
}


export default CartContextProvider;