import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get_orders } from "../../store/reducers/orderReducer";
const Orders = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-slate-600">My Orders</h2>

        <select
          className="outline-none px-3 py-1 border rounded-md text-slate-600"
          //   value={state}
          //   onChange={(e) => setState(e.target.value)}
        >
          <option value="all">--order status---</option>
          <option value="placed">Placed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
          <option value="warehouse">Warehouse</option>
        </select>
      </div>
      <div className="pt-4">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment status
                </th>
                <th scope="col" className="px-6 py-3">
                  Order status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  123
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  $200
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  status
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  status
                </td>
                <td scope="row" className="px-6 py-4">
                  <Link to="#">
                    <span className="bg-green-100 text-green-800 text-sm font-normal mr-2 px-2.5 py-[1px] rounded">
                      view
                    </span>
                  </Link>

                  <span
                    //  onClick={() => redirect(o)}
                    className="bg-green-100 text-green-800 text-sm font-normal mr-2 px-2.5 py-[1px] rounded cursor-pointer"
                  >
                    Pay Now
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
