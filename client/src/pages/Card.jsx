import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   get_card_products,
//   delete_card_product,
//   messageClear,
//   quantity_inc,
//   quantity_dec,
// } from "../store/reducers/cardReducer";

const Card = () => {
  const card_products = [1, 2, 3];
  const outOfStoctProduct = [1, 2];
  return (
    <div>
      <Headers />
      <section className='bg-[url("http://localhost:5173/images/banner/card.jpg")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shop.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-2">
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Card--57,56,58</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
