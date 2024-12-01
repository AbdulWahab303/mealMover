import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [singleShop,setSingleShop]=useState(null);

  const addToCart = (item,id) => {
    console.log(cartItems);
    console.log(item);
    if(cartItems.length===0){
      setSingleShop(id);
      
    }
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item.menuItem._id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item.menuItem._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item.menuItem, quantity: 1 }];
      }
    });
  };

  const shopCheck=(id)=>{
    return (singleShop?id===singleShop:true);
  }
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
    if(cartItems.length===1){
      setSingleShop(null);
    }
    setCartItems((prevCart) =>
      prevCart.filter((cartItem) => cartItem._id !== id)
    );
  };

  // Clear the cart
  const clearCart = () => {
    setSingleShop(null);
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseInt(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart,totalPrice,addSameItem,removeSameItem,shopCheck,singleShop }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
