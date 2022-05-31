import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const MyOrderRow = ({ order, setOrder, index }) => {
  const { _id, paid, orderName, orderQuantity, totalPrice, transactionId } =
    order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{orderName.slice(0, 28)}</td>
      <td>{orderQuantity}</td>
      <td>{totalPrice}</td>
      <td>
        {!paid && (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="btn border-0 btn-xs text-base-100 font-semibold bg-green-400"
          >
            Pay Now
            <FaArrowRight />
          </Link>
        )}

        {paid && (
          <button className="px-6 rounded-xl text-base-100 font-semibold bg-green-300 flex items-center">
            Paid
            <FaCheckCircle className="text-xs ml-1" />
          </button>
        )}
        {transactionId && (
          <td>
            <span className="text-red-400 font-semibold">transaction id:</span>{" "}
            {transactionId}
          </td>
        )}
      </td>

      <td>
        {!paid && (
          <label
            onClick={() => setOrder(order)}
            htmlFor="order-delete-modal"
            className="btn btn-xs btn-error"
          >
            <span className="flex items-center text-base-100">
              Cancel <FaTrashAlt />
            </span>
          </label>
        )}
      </td>
    </tr>
  );
};

export default MyOrderRow;
