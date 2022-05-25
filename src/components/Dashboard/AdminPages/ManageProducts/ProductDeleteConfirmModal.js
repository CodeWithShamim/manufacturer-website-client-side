import React from "react";
import { toast } from "react-toastify";

const ProductDeleteConfirmModal = ({ product, setProduct, refetch }) => {
  const { _id, name } = product;
  console.log(_id);
  //   delete order
  const handleDeleteOrder = (id) => {
    fetch(`http://localhost:5000/tool/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        setProduct(null);
        if (data.deletedCount) {
          toast.success(`Succfully deleted ${name?.slice(0, 20)} this item`);
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="product-delete-modal"
        className="modal-toggle"
      />
      <div className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-400">
            Are you sure! You want to delete this item.
          </h3>
          <p className="py-4">{name}</p>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteOrder(_id)}
              className="btn btn-success text-base-100"
            >
              Submit
            </button>
            <label htmlFor="product-delete-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteConfirmModal;
