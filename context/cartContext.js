import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item.menuItem._id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item.menuItem, quantity: 1 }];
      }
    });
  };

  const addSameItem=(id)=>{
    setCartItems((prev)=>{
        return prev.map((val)=>{
            if(val._id===id){
                return {...val,quantity:val.quantity+1};
            }
            else{
                return val
            }
        });
    })
  }

  const removeSameItem=(id)=>{
    setCartItems((prev)=>{
        return prev.map((val)=>{
            if(val._id===id){
                return {...val,quantity:val.quantity-1};
            }
            else{
                return val
            }
        });
    })
  }
  // Remove an item from the cart
  const removeFromCart = (id) => {    
    setCartItems((prevCart) =>
      prevCart.filter((cartItem) => cartItem._id !== id)
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseInt(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart,totalPrice,addSameItem,removeSameItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
