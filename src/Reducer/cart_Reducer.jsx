const cart_Reducer = (state, action) => {
  if (action.type === "ADDTOCART") {
    let { id, productName, price, image, isInCart } = action.payload;
    let cartProduct = {
      id,
      productName,
      price,
      image,
      
    };
    return {
      ...state, 
      cart: [...state.cart, cartProduct],
      data: changeProductInCart(state.data, id, true),
    };
  }
  if (action.type === "REMOVE_ITEM") {
        const NewData = state.cart.filter((item)=> item.id !== action.payload)
    return {
      ...state,
      cart: NewData,
      data: changeProductInCart(state.data, action.payload, false),
    };
  }
  
  return state;
};

function changeProductInCart(data, id, isInCart){
     return data.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            isInCart,
          };
        }
        return product;
      })
}

export default cart_Reducer;
