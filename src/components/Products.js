import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

const Products = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex  justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product)}>
            <div className="flex justify-center items-center bg-red-400  text-white w-12 h-12">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 flex justify-center items-center bg-white drop-shadow-xl"
          >
            <BsEyeFill className="" />
          </Link>
        </div>
      </div>
      {/* title */}
      <div>
        <div className="text-sm text-gray-400 capitalize">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
          <h2 className="font-semibold ">CAD {price}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Products;
