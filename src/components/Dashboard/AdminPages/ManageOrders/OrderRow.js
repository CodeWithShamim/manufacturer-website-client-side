import React from "react";
import {
  FaTrashRestore,
  FaCheckCircle,
  FaCompressAlt,
  FaRegThumbsDown,
} from "react-icons/fa";

const OrderRow = ({ order, setOrder }) => {
  const { paid, orderName, orderQuantity, totalPrice } = order;
  return (
    <tr>
      <th>
        <FaCheckCircle className="text-blue-600 text-xl" />
      </th>
      <td>{orderName?.slice(0, 27)}</td>
      <td>{orderQuantity}</td>
      <td>{totalPrice}</td>
      <td>
        {!paid && (
          <div className="px-6 rounded-xl text-base-100 font-semibold bg-red-400">
            <span className="flex items-center justify-center">
              unpaid
              <FaRegThumbsDown className="m-1" />
            </span>
          </div>
        )}

        {paid && (
          <div className="rounded-xl text-base-100 font-semibold bg-green-300">
            <span className="flex items-center justify-center">
              Paid
              <FaCompressAlt />
            </span>
          </div>
        )}
      </td>

      <td>
        <label
          onClick={() => setOrder(order)}
          htmlFor="order-delete-modal"
          className="btn btn-xs btn-error text-base-100"
        >
          Delete
          <FaTrashRestore className="m-1" />
        </label>
      </td>
    </tr>
  );
};

export default OrderRow;
