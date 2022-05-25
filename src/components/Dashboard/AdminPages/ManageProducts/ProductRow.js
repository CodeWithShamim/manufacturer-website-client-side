import React from "react";

const ProductRow = ({ product, setProduct }) => {
  const { name, img, minimumQuantity, availableQuantity, price } = product;

  return (
    <tr>
      <th>
        <img
          className="rounded-full w-16 h-16"
          src={img ? img : ""}
          alt="product-img"
        />
      </th>
      <td>{name.slice(0, 28)}</td>
      <td>{minimumQuantity}</td>
      <td>{availableQuantity}</td>
      <td>{price}</td>
      <td>
        <label
          onClick={() => setProduct(product)}
          htmlFor="product-delete-modal"
          className="btn btn-sm btn-error text-base-100"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
