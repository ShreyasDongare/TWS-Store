import React from "react";
import Grid_View from "./Grid_View";
import { useCartContext } from "../Context/CartContext";

const ProductList = () => {
  const {data} = useCartContext()

  return(
  <div className="my-12">
    <Grid_View data={data} />
  </div>

  )

};

export default ProductList;
