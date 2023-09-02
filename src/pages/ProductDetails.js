import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    <section className="h-screen flex justify-center items-center ">
      Loading...
    </section>;
  }

  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen overflow-auto">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm " src={image}></img>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-semibold mb-2 ">{title}</h1>
            <div className="text-xl font-medium">${price}</div>
            <p className="my-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary text-white py-4 px-8 pb-8"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
