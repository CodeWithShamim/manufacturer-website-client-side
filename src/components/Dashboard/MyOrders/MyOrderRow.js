import React from "react";
import { Link } from "react-router-dom";

const MyOrderRow = ({ order, setOrder, index }) => {
  const { _id, paid, orderName, orderQuantity, totalPrice } = order;
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
            className="btn border-0 btn-sm text-base-100 font-semibold bg-green-500"
          >
            Pay Now
          </Link>
        )}
        {paid && (
          <button className="px-6 rounded-xl text-base-100 font-semibold bg-green-500">
            Paid
          </button>
        )}
      </td>

      <td>
        <label
          onClick={() => setOrder(order)}
          htmlFor="order-delete-modal"
          className="btn btn-sm btn-error"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default MyOrderRow;
