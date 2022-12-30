const cart_Reducer = (state, action) => {
  if (action.type === "ADDTOCART") {
    let { id, productName, price, image } = action.payload;
    let cartProduct = {
      id,
      productName,
      price,
      image,
    };
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  if (action.type === "REMOVE_ITEM") {
        const NewData = state.cart.filter((item)=> item.id !== action.payload)
    return {
      ...state,
      cart: NewData ,
    };
  }
  
  return state;
};

export default cart_Reducer;
