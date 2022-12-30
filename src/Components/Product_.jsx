import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const Product_ = ({ item }) => {
  const { id, productName, image, price, stock } = item;
  const { addToCart } = useCartContext();
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
      {stock > 0 ? (
        <NavLink
          to={`/cart`}
          onClick={() => addToCart(id, productName, price, image)}
        >
          <button className="btn  w-full shadow-md shadow-teal-600 hover:btnhover duration-300 ">
            Add to cart
          </button>
        </NavLink>
      ) : (
        <button className="btn bg-slate-400  w-full shadow-md shadow-slate-400  duration-300 ">
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Product_;
