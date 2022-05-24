import React from "react";

const MyOrderRow = ({ order, setOrder, index }) => {
  const { orderName, orderQuantity, totalPrice } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{orderName.slice(0, 28)}</td>
      <td>{orderQuantity}</td>
      <td>{totalPrice}</td>
      <td>
        <label
          onClick={() => setOrder(order)}
          htmlFor="order-delete-modal"
          className="btn btn-error"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default MyOrderRow;
