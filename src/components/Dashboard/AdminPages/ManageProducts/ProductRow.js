import React from "react";
import { FaTrashRestore, FaMoneyBillAlt, FaSteamSymbol } from "react-icons/fa";

const ProductRow = ({ product, setProduct }) => {
  console.log(product);
  const { name, img, minimumQuantity, availableQuantity, price } = product;

  return (
    <tr>
      <th>
        <img className="rounded-full w-10 h-10" src={img} alt="product-img" />
      </th>
      <td>{name?.slice(0, 28)}</td>
      <td>
        <FaSteamSymbol />
        {minimumQuantity}
      </td>
      <td>
        {" "}
        <FaSteamSymbol />
        {availableQuantity}
      </td>
      <td>
        <FaMoneyBillAlt />
        {price}
      </td>
      <td>
        <label
          onClick={() => setProduct(product)}
          htmlFor="product-delete-modal"
          className="btn btn-xs btn-error text-base-100"
        >
          Delete
          <FaTrashRestore className="m-1" />
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
