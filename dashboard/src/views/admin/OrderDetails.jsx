import React, { useEffect, useState } from "react";
import adminImage from "../../assets/admin.jpg";
//import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   get_admin_order,
//   admin_order_status_update,
//   messageClear,
// } from "../../store/Reducers/OrderReducer";
const OrderDetails = () => {
  //   const { orderId } = useParams();
  //   const dispatch = useDispatch();

  //   const { order, errorMessage, successMessage } = useSelector(
  //     (state) => state.order
  //   );

  //   useEffect(() => {
  //     dispatch(get_admin_order(orderId));
  //   }, [orderId]);

  const [status, setStatus] = useState("");
  //   useEffect(() => {
  //     setStatus(order?.delivery_status);
  //   }, [order]);
  //   const status_update = (e) => {
  //     dispatch(
  //       admin_order_status_update({ orderId, info: { status: e.target.value } })
  //     );
  //     setStatus(e.target.value);
  //   };

  //   useEffect(() => {
  //     if (successMessage) {
  //       toast.success(successMessage);
  //       dispatch(messageClear());
  //     }
  //     if (errorMessage) {
  //       toast.error(errorMessage);
  //       dispatch(messageClear());
  //     }
  //   }, [successMessage, errorMessage]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4  bg-[#283046] rounded-md">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-[#d0d2d6]">Order Details</h2>
          <select
            // onChange={status_update}
            // value={status}
            name=""
            id=""
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="pending">pending</option>
            <option value="processing">processing</option>
            <option value="warehouse">warehouse</option>
            <option value="placed">placed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>
        <div className="p-4">
          <div className="flex gap-2 text-lg text-[#d0d2d6]">
            <h2>#123</h2>
            <span>date</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[32%]">
              <div className="pr-3 text-[#d0d2d6] text-lg">
                <div className="flex flex-col gap-1">
                  <h2 className="pb-2 font-semibold">Deliver to :Name</h2>
                  <p>
                    <span className="text-sm">name</span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <h2>Payment Status : </h2>
                  <span className="text-base">pending</span>
                </div>
                <span>Price : $200</span>
                <div className="mt-4 flex flex-col gap-8">
                  <div className="text-[#d0d2d6]">
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[45px] h-[45px]"
                        src={adminImage}
                        alt="image"
                      />
                      <div>
                        <h2>name</h2>
                        <p>
                          <span>Brand : </span>
                          <span>brand</span>
                          <span className="text-lg">Quantity :20</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[68%]">
              <div className="pl-3">
                <div className="mt-4 flex flex-col">
                  <div className="text-[#d0d2d6] mb-6">
                    <div className="flex justify-start items-center gap-3">
                      <h2>Seller 1 order : </h2>
                      <span>delivery_status</span>
                    </div>

                    <div className="flex gap-3 text-md mt-2">
                      <img
                        className="w-[45px] h-[45px]"
                        src={adminImage}
                        alt="image"
                      />
                      <div>
                        <h2>name</h2>
                        <p>
                          <span>Brand : </span>
                          <span>brand </span>
                          <span className="text-lg">Quantity : quantity</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
