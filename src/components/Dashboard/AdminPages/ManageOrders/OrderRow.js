import React from "react";

const OrderRow = ({ order }) => {
  const { paid, orderName, orderQuantity, totalPrice } = order;
  return (
    <tr>
      <th>
        <input type="checkbox" className="checkbox" disabled />
      </th>
      <td>{orderName?.slice(0, 27)}</td>
      <td>{orderQuantity}</td>
      <td>{totalPrice}</td>
      <td>
        {!paid && (
          <div className="px-6 rounded-xl text-base-100 font-semibold bg-red-400">
            Unpaid
          </div>
        )}

        {paid && (
          <div className="px-6 rounded-xl text-base-100 font-semibold bg-green-300">
            Paid
          </div>
        )}
      </td>

      <td>
        <label htmlFor="order-delete-modal" className="btn btn-sm btn-error">
          Delete
        </label>
      </td>
    </tr>
  );
};

export default OrderRow;
