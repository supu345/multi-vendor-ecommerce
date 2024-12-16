import React, { useEffect, useState } from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { customer_register, messageClear } from "../store/reducers/authReducer";
import { useSelector, useDispatch } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
const Register = () => {
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage, userInfo } = useSelector(
    (state) => state.auth
  );
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    //console.log(state);
    dispatch(customer_register(state));
  };
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (userInfo) {
      navigate("/");
    }
  }, [successMessage, errorMessage]);
  return (
    <div>
      {loader && (
        <div className="w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]">
          <FadeLoader />
        </div>
      )}
      <Headers />
      <div className="bg-slate-200 mt-4">
        <div className="w-full flex justify-center items-center p-4 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[80%] lg:w-[60%] bg-white rounded-md shadow-lg">
            {/* Left Side: Form */}
            <div className="p-6 sm:p-8">
              <h2 className="text-center text-xl sm:text-2xl text-slate-600 font-bold mb-4">
                Register
              </h2>
              <form onSubmit={register} className="text-slate-600">
                <div className="flex flex-col gap-1 mb-2">
                  <label htmlFor="name">Name</label>
                  <input
                    onChange={inputHandle}
                    value={state.name}
                    type="text"
                    className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={inputHandle}
                    value={state.email}
                    type="email"
                    className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={inputHandle}
                    value={state.password}
                    type="password"
                    className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button className="w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md">
                  Register
                </button>
              </form>

              {/* OR Divider */}
              <div className="flex items-center justify-center py-2">
                <div className="h-[1px] bg-slate-300 w-[45%]"></div>
                <span className="px-3 text-slate-600">or</span>
                <div className="h-[1px] bg-slate-300 w-[45%]"></div>
              </div>

              {/* Social Login Buttons */}
              <button className="w-full py-2 bg-indigo-500 shadow hover:shadow-indigo-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                <FaFacebookF />
                <span>Login with Facebook</span>
              </button>
              <button className="w-full py-2 bg-orange-500 shadow hover:shadow-orange-500/30 text-white rounded-md flex justify-center items-center gap-2">
                <AiOutlineGoogle />
                <span>Login with Google</span>
              </button>

              {/* Footer Links */}
              <div className="text-center text-slate-600 pt-4">
                <p>
                  Already have an account?{" "}
                  <Link className="text-blue-500" to="/login">
                    Login
                  </Link>
                </p>
                <p className="pt-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                    href="/login"
                  >
                    Login
                  </a>{" "}
                  as seller account
                </p>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="hidden md:block w-full">
              <img
                className="w-[390px] h-[595px] object-cover rounded-r-md"
                src="http://localhost:5173/images/login.jpg"
                alt="Login"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
