import React from "react";
import Grid_View from "./Grid_View";
import data from "../data";

const ProductList = () => {

  return(
  <div className="my-12">
    <Grid_View data={data} />
  </div>

  )

};

export default ProductList;
