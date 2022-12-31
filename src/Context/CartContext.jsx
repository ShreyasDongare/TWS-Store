import { createContext, useContext, useEffect, useReducer, useState } from "react";
import data from "../data";
import reducer from "../Reducer/cart_Reducer";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();


const initialState = {
  cart: [],
  data: data,
  
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, productName, price, image,isInCart) => {
    dispatch({
      type: "ADDTOCART",
      payload: { id, productName, price, image, isInCart },
    });
    
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
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.lastName && person.email && person.number){
       navigate("/finalreview");
    }
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
