import React from "react";

const MyOrderRow = ({ order, index }) => {
  console.log(order);
  const { name, orderName, orderQuantity, totalPrice } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{orderName.slice(0, 20)}</td>
      <td>{orderQuantity}</td>
      <td>{totalPrice}</td>
      <td>
        <button className="btn btn-error">Cancel</button>
      </td>
    </tr>
  );
};

export default MyOrderRow;
