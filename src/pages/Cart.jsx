import React from "react";
import { MdDelete } from "react-icons/md";
import CheckOutForm from "../Components/CheckOutForm";
import { useCartContext } from "../Context/CartContext";


const Cart = () => {
  const { cart } = useCartContext();
  const { removeCartItem } = useCartContext();
  if(cart.length === 0){
    return (
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto  ">
          <h2 className="text-2xl my-3">Cart Details</h2>
          <div className="grid grid-cols-6 text-rose-600 text-xl my-4 border-b-2 border-slate-500 pb-3">
            <h3 className="col-span-3">Product Details</h3>
            <h3 className="">Quantity</h3>
            <h3 className="">Price</h3>
            <h3 className=" self-center justify-self-center">Remove Item </h3>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto flex justify-center items-center h-96  ">
           <h2 className="text-3xl">Cart Is Empty</h2>
           </div>
      </div>
    );
  }




  return (
    <div className="w-full ">
      <div className="max-w-screen-lg mx-auto  ">
        <h2 className="text-2xl my-3">Cart Details</h2>
        <div className="grid grid-cols-6 text-rose-600 text-xl my-4 border-b-2 border-slate-500 pb-3">
          <h3 className="col-span-3">Product Details</h3>
          <h3 className="">Quantity</h3>
          <h3 className="">Price</h3>
          <h3 className=" self-center justify-self-center">Remove Item </h3>
        </div>
        {cart ? (
          <div className=" my-4 ">
            {cart.map((item) => {
              const { id, price, productName, image } = item;
              return (
                <div key={id} className="grid grid-cols-6">
                  <div className="col-span-3 flex items-center my-2">
                    <img src={image} className="h-14 mr-5 rounded" alt={productName} />
                    <p>{productName}</p>
                  </div>
                  <h3 className="flex items-center">qty</h3>
                  <h3 className="flex items-center">&#8377; {price}</h3>
                  <h3 className="self-center justify-self-center text-rose-600 cursor-pointer hover:text-black duration-300">
                    <MdDelete size={25} onClick={() => removeCartItem(id)} />
                  </h3>
                </div>
              );
            })}
          </div>
        ) : (
          <div>nothing</div>
        )}
      </div>
      <div>
        <CheckOutForm/>
      </div>
    </div>
  );
};

export default Cart;
