import React from "react";

const ProductRow = ({ product }) => {
  const { name, img, minimumQuantity, availableQuantity, price } = product;

  return (
    <tr>
      <th>
        <img className="rounded-full w-32 h-32" src={img} alt="product-img" />
      </th>
      <td>{name.slice(0, 28)}</td>
      <td>{minimumQuantity}</td>
      <td>{availableQuantity}</td>
      <td>{price}</td>
      <td>
        <label htmlFor="product-delete-modal" className="btn btn-sm btn-error">
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
