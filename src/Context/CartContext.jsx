import { createContext, useContext, useReducer, useState } from "react";
import data from "../data";
import reducer from "../Reducer/cart_Reducer";
const CartContext = createContext();

const initialState = {
  cart: [],
  data: data,
  total_Product: "",
  total_Amount: "",
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, productName, price, image) => {
    dispatch({ type: "ADDTOCART", payload: { id, productName, price, image } });
  };

  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });
// console.log(person, "ddfh")
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  // console.log(person);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeCartItem,
        handleChange,
        handleSubmit,
        person,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
