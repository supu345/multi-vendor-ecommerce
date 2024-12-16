import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const AllCategoris = ({ categorys }) => {
  const [category, setCategory] = useState("");
  const [categoryShow, setCategoryShow] = useState(true);
  console.log(categorys);

  return (
    <div className="w-[85%] lg:w-[90%] mx-auto">
      <div className="flex w-full flex-wrap md-lg:gap-8">
        <div className="w-3/12 md-lg:w-full">
          <div className="bg-white relative">
            <div
              onClick={() => setCategoryShow(!categoryShow)}
              className="h-[50px] bg-violet-400 text-white flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer"
            >
              <div className="flex justify-center items-center gap-3">
                <span>
                  <FaList />
                </span>
                <span>All Category</span>
              </div>
              <span className="pt-1">
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
            <div
              className={`${
                categoryShow ? "h-0" : "h-[400px]"
              } overflow-hidden transition-all md-lg:relative duration-500 absolute z-[99999] bg-white w-full border-x`}
            >
              <ul className="py-2 text-slate-600 font-medium h-full overflow-auto">
                {categorys.map((c, i) => {
                  return (
                    <li
                      key={i}
                      className="flex justify-start items-center gap-2 px-[24px] py-[6px]"
                    >
                      <img
                        src={c.image}
                        className="w-[30px] h-[30px] rounded-full overflow-hidden"
                        alt={c.name}
                      />
                      <Link
                        to={`/products?category=${c.name}`}
                        className="text-sm block"
                      >
                        {c.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-9/12 pl-8 md-lg:pl-0 md-lg:w-full">
          <div className="flex flex-wrap w-full justify-between items-center md-lg:gap-6">
            <div className="w-8/12 md-lg:w-full">
              <div className="flex border h-[50px] items-center relative gap-5">
                <div className="relative after:absolute after:h-[25px] after:w-[1px] after:bg-[#afafaf] after:-right-[15px] ">
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-[150px] text-slate-600 font-semibold bg-transparent px-2 h-full outline-0 border-none"
                    name=""
                    id=""
                  >
                    <option value="">Select category</option>
                    {categorys.map((c, i) => (
                      <option key={i} value={c}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  className="w-full relative bg-transparent text-slate-500 outline-0 px-3 h-full"
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  name=""
                  id=""
                  placeholder="what do you need"
                />
                <button
                  // onClick={search}
                  className="bg-violet-400 right-0 absolute px-8 h-full font-semibold uppercase text-white"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="w-4/12 block md-lg:hidden pl-2 md-lg:w-full md-lg:pl-0">
              <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
                <div className="w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center">
                  <span>
                    <IoIosCall />
                  </span>
                </div>
                <div className="flex justify-end flex-col gap-1">
                  <h2 className="text-md font-medium text-slate-700">
                    +8803242343243
                  </h2>
                  <span className="text-sm">support 33/45 time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoris;
