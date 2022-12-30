import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const CheckOutForm = () => {
  const { handleChange, handleSubmit, person } = useCartContext();
  return (
    <div className="max-w-screen-lg mx-auto  my-20 ">
      <div className="flex flex-col justify-center items-center ">
        <div className="w-full flex items-center justify-center my-4">
          <h2 className="text-2xl  border-b-2 border-slate-500 px-5 ">
            Checkout
          </h2>
        </div>
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between gap-5 outline-none">
            <label htmlFor="firstName">Firstname :</label>
            <input
              value={person.firstName}
              onChange={handleChange}
              type="text"
              id="firstName"
              name="firstName"
              className="px-4 py-2 border border-gray-600 rounded"
              required
            />
          </div>
          <div className="flex items-center justify-between gap-5 outline-none">
            <label htmlFor="lastName">Lastname :</label>
            <input
              value={person.lastName}
              onChange={handleChange}
              type="text"
              id="lastName"
              name="lastName"
              className="px-4 py-2 border border-gray-600 rounded"
              required
            />
          </div>
          <div className="flex items-center justify-between gap-5 outline-none">
            <label htmlFor="email">Email :</label>
            <input
              value={person.email}
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="px-4 py-2 border border-gray-600 rounded"
              required
            />
          </div>
          <div className="flex items-center justify-between gap-5 outline-none">
            <label htmlFor="number">Phone No. :</label>
            <input
              value={person.number}
              onChange={handleChange}
              type="number"
              id="number"
              name="number"
              className="px-4 py-2 border border-gray-600 rounded"
              required
            />
          </div>
          <div className="flex items-center justify-center ">
              <button className="btn" type="submit">
            <NavLink to={"/finalreview"}>
                Submit To checkout
            </NavLink>
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOutForm;
