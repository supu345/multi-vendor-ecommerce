import React, { useState } from "react";
import Headers from "../components/Headers";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Range } from "react-range";
import { AiFillStar } from "react-icons/ai";

import { CiStar } from "react-icons/ci";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import Products from "../components/products/Products";
import Footer from "../components/Footer";
import ShopProducts from "../components/products/ShopProducts";
import Pagination from "../components/Pagination";
const Shops = () => {
  const [filter, setFilter] = useState(true);
  const [styles, setStyles] = useState("grid");
  const [pageNumber, setPageNumber] = useState(1);
  const [parPage, setParPage] = useState(3);

  const categorys = [
    "Clothing",
    "Sports",
    "Laptop",
    "Tabs",
    "Travel",
    "Phones",
  ];
  const [state, setState] = useState({ values: [50, 2000] });

  return (
    <div>
      <Headers />
      <section className='bg-[url("http://localhost:5173/images/banner/shop.gif")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#242222aa]">
          {" "}
          {/* Adjusted opacity to aa */}
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-xl font-bold">Shop.my</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="w-[85%] md:w-[90%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className={`md:block hidden ${!filter ? "mb-6" : "mb-0"}`}>
            <button
              onClick={() => setFilter(!filter)}
              className="text-center w-full py-2 px-3 bg-indigo-500 text-white"
            >
              Filter Product
            </button>
          </div>
          <div className="w-full flex flex-row">
            <div
              className={`w-3/12 md-lg:w-4/12 md:w-1/3 pr-8 ${
                filter
                  ? "md:overflow-hidden md:mb-6"
                  : "md:overflow-auto md:mb-0"
              }`}
            >
              <h2 className="text-xl font-bold mb-3 text-slate-600">
                Category
              </h2>
              <div className="py-2">
                {categorys.map((c, i) => (
                  <div
                    className="flex justify-start items-center gap-2 py-1"
                    key={i}
                  >
                    <input
                      // checked={category === c.name ? true : false}
                      //  onChange={(e) => queryCategoey(e, c.name)}
                      type="checkbox"
                      id={c}
                    />
                    <label
                      className="text-slate-600 block cursor-pointer"
                      htmlFor={c}
                    >
                      {c}
                    </label>
                  </div>
                ))}
              </div>
              <div className="py-2 flex flex-col gap-5">
                <h2 className="text-xl font-bold mb-3 text-slate-600">Price</h2>
                <Range
                  step={1}
                  min={50}
                  max={2000}
                  values={state.values}
                  onChange={(values) => setState({ values })}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      className="w-[200px] h-[6px] bg-slate-200 rounded-full cursor-default"
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      className="w-[15px] h-[15px] bg-blue-500 rounded-full"
                      {...props}
                    />
                  )}
                />
                <div>
                  <span className="text-red-500 font-bold text-lg">
                    ${Math.floor(state.values[0])} - $
                    {Math.floor(state.values[1])}
                  </span>
                </div>
              </div>
              <div className="py-3 flex flex-col gap-4">
                <h2 className="text-xl font-bold mb-3 text-slate-600">
                  Rating
                </h2>
                <div className="flex flex-col gap-3">
                  <div
                    // onClick={() => setRatingQ(5)}
                    className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                  >
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </div>
                </div>
                <div
                  // onClick={() => setRatingQ(4)}
                  className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                >
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                </div>

                <div
                  // onClick={() => setRatingQ(3)}
                  className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                >
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                </div>
                <div
                  // onClick={() => setRatingQ(2)}
                  className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                >
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                </div>
                <div
                  //  onClick={() => setRatingQ(1)}
                  className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                >
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                </div>
                <div
                  // onClick={resetRating}
                  className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                >
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                </div>
              </div>
              <div className="py-5 flex flex-col gap-4 ">
                <Products title="Latest Products" />
              </div>
            </div>
            <div className="w-9/12 md-lg:w-8/12 md:w-full">
              <div className="pl-8 md:pl-0 pt-4">
                <div className="py-4 bg-white mb-10 px-3 rounded-md flex justify-between items-start border">
                  <h2 className="text-lg font-medium text-slate-600">
                    Products
                  </h2>

                  <select
                    //onChange={(e) => setSortPrice(e.target.value)}
                    className="p-1 border outline-0 text-slate-600 font-semibold"
                    name=""
                    id=""
                  >
                    <option value="">Sort By</option>
                    <option value="low-to-high">Low to High Price</option>
                    <option value="high-to-low">High to Low Price</option>
                  </select>
                  <div className="flex justify-center items-start gap-4 md-lg:hidden">
                    <div
                      // onClick={() => setStyles("grid")}
                      className={`p-2 ${
                        styles === "grid" && "bg-slate-300"
                      } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                    >
                      <BsFillGridFill />
                    </div>
                    <div
                      //onClick={() => setStyles("list")}
                      className={`p-2 ${
                        styles === "list" && "bg-slate-300"
                      } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                    >
                      <FaThList />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-8">
                <ShopProducts styles={styles} />
              </div>
              <div>
                <Pagination
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                  totalItem={20}
                  parPage={parPage}
                  showItem={Math.floor(20 / 3)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shops;