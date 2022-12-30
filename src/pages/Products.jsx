import React from "react";
import ProductList from "../Components/ProductList";

const Products = () => {
 
  return (
    <div className="w-full">
      <div className="max-w-[1100px] mx-auto grid grid-flow-col grid-cols-5 ">
        
        <section className="col-span-5">
          <div className="mx-auto">
            <ProductList />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
