import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { getNavs } from "../navigation/index";
import { useDispatch, useSelector } from "react-redux";
import { BiLogInCircle } from "react-icons/bi";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navItems, setNavItems] = useState([]);
  const { role } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  useEffect(() => {
    const navs = getNavs("seller");
    setNavItems(navs);
  }, [role]);

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}
      ></div>
      <div
        className={`w-[260px] fixed bg-[#283046] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img className="w-full h-full" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="px-[16px]">
          <ul className="space-y-2">
            {navItems.map((nav) => (
              <li key={nav.id}>
                <Link
                  to={nav.path}
                  className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                >
                  {nav.icon}
                  <span>{nav.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button className="text-[#d0d2d6] font-normal duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 ">
                <span>
                  <BiLogInCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
