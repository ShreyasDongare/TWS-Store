import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const Product_ = ({ item }) => {
  const { id, productName, image, price, stock, isInCart } = item;
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
      <button disabled={isInCart}
        onClick={() => addToCart(id, productName, price, image, isInCart)}
        className={`btn ${
          isInCart
            ? "disabled:opacity-50 disabled:cursor-not-allowed bg-slate-400 shadow-slate-400"
            : " shadow-teal-600 hover:btnhover"
        }  w-full shadow-md duration-300`}
      >
        {isInCart ? "Already in cart" : "Add to cart"}
      </button>
      {/* {isInCart ? (
        <button
          disabled
          className="btn disabled:opacity-50 disabled:cursor-not-allowed bg-slate-400  w-full shadow-md shadow-slate-400  duration-300 "
        >
         Already in cart
        </button>
      ) : (
        <NavLink
          to={`/cart`}
          onClick={() => addToCart(id, productName, price, image, isInCart)}
        >
          <button
            className={`btn  w-full shadow-md shadow-teal-600 hover:btnhover duration-300`}
          >
            Add to cart
          </button>
        </NavLink>
      )} */}
    </div>
  );
};

export default Product_;
