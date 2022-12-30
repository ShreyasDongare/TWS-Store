import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const FinalReview = () => {
  const { cart, person } = useCartContext();
//   console.log(person);

  return (
    <div className="w-full my-14">
      <div className=" max-w-screen-lg mx-auto ">
        <div>
          <div>
            <h2 className="text-4xl ">Order Successfully Submitted</h2>
          </div>
          <div className="flex justify-center">
            <h3 className="text-2xl">Cart Details</h3>
          </div>
          <div className="flex justify-between py-2 text-lg ">
            <p>Total Number of items in cart</p>
            <p className="text-green-500">{cart.length}</p>
          </div>
          <div className="flex justify-between py-2 text-lg ">
            <p>Total Order Amount</p>
            <p className="text-green-500">
              &#8377;
              {cart.reduce((acc, curr) => {
                return acc + curr.price;
              }, 0)}
            </p>
          </div>
          <div className="flex justify-between py-2 text-lg ">
            <p>Shipping </p>
            <p className="text-green-500">&#8377; 0.00 </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center text-2xl">
            <h3>Customer Details</h3>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-lg ">Costumer Name</p>
            <p className="text-lg capitalize">{`${person.firstName} ${person.lastName}`}</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-lg ">Costumer Email</p>
            <p className="text-lg ">{`${person.email} `}</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-lg ">Costumer Contact No</p>
            <p className="text-lg ">{`${person.number} `}</p>
          </div>
        </div>
        <div className="my-5 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center">
            Thankyou for shopping with us!!
          </h1>
          <NavLink to="/products">
            <button className="btn my-4">Continue shopping</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FinalReview;
