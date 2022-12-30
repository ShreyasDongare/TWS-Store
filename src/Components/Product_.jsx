import React from "react";
import { NavLink } from "react-router-dom";

const Product_ = ({ item }) => {
  const { id, productName, image, price } = item;

  return (
    <div className="flex flex-col capitalize " key={id}>
      <div className="relative">
        <img
          src={image}
          alt={productName}
          className="rounded shadow-md shadow-slate-800 md:rounded-lg my-1 -z-30 hover:scale-105 duration-300 h-32 md:h-44"
        />
      </div>
      <div className="flex justify-between md:my-2">
        <div>
          <p className="text-sm md:text-base">{productName}</p>
        </div>
        <div>
          <p className="text-sm md:text-base">&#8377;{price}</p>
        </div>
      </div>
      <NavLink to={`/cart`}>
        <button className="btn  w-full shadow-md shadow-teal-600 hover:btnhover duration-300 ">
          <span className="">Add to cart</span>
        </button>
      </NavLink>
    </div>
  );
};

export default Product_;
