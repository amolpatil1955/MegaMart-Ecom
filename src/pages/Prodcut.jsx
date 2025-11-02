import ProdcutData from "../store/Product";
import { IoStar } from "react-icons/io5";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/Cartcontext";

const Prodcut = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ get addToCart function

  const AddtoAlert = () => {
    toast.success(` added to cart!`);
  };

  const handleView = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-7xl mt-10 mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-extrabold text-gray-800 md:text-2xl ">
            Shop From <span className="text-sky-600">Top Product</span>
          </h2>
          <button className="text-sky-600 text-sm font-medium hover:underline">
            View All →
          </button>
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-2 gap-3  md:grid-cols-4 lg:grid-cols-5    max-w-7xl mx-auto ">
        {ProdcutData.map((e) => {
          const rating = Number(e.rating);

          return (
            <div
              className="h-auto w-40 md:w-50 p-4 px-3 border rounded-2xl border-gray-300   relative hover:shadow-lg   hover:border-sky-800 hover:scale-105 transition-transform duration-300 bg-white"
              key={e.id}
            >
              <div className="bg-[#4E97D1] text-white text-xs font-bold  absolute py-2 px-4 right-0 top-0 rounded-bl-lg rounded-tr-2xl">
                50% Off
              </div>
              <div key={e.id} className=" h-full w-full   ">
                <img
                  src={e.img}
                  className=" m-auto h-[40%] w-full "
                  onClick={() => handleView(e.id)}
                />
                <div className="mt-2 ">
                  <h2 className="text-left text-xm truncate  font-semibold  md:text-[13px] px-1">
                    {e.name}
                  </h2>
                  <p className="text-left   text-sm text-gray-600">
                    {e.category}
                  </p>

                  {/* ⭐ Star Rating */}
                  <div className="flex  items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <IoStar
                        key={i}
                        className={`text-l ${
                          i < rating ? "text-green-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex h-auto items-center mt-2 mb-4 md:text-sm md:mb-5">
                    <p className="text-2xl font-bold font-sarif">{e.price}</p>
                    <p className="line-through pt-1 px-2 text-s">{"50,000"}</p>
                  </div>
                  <div>
                    <button
                      onClick={()=>{addToCart(e);AddtoAlert()}}
                      className="w-full h-auto absolute  py-2  bottom-0 left-0 bg-[#4E97D1] text-white  font-bold rounded-b-xl hover:bg-blue-700 transition duration-300"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Prodcut;
