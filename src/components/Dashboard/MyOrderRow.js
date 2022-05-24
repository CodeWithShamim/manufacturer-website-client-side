import React from "react";

const MyOrderRow = ({ order, index }) => {
  console.log(order);
  const { name, orderName, orderQuantity, totalPrice } = order;
  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        {/* <td>{orderName}</td> */}
        <td>{orderQuantity}</td>
        <td>{totalPrice}</td>
        <td>
          <button className="btn btn-error">Cancel</button>
        </td>
      </tr>
    </div>
  );
};

export default MyOrderRow;
