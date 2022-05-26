import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const ProductDeleteConfirmModal = ({ product, setProduct, refetch }) => {
  const [user] = useAuthState(auth);
  const { email } = user;
  const { _id, name } = product;
  //   delete order
  const handleDeleteOrder = (id) => {
    fetch(`https://ryan-refrigerator-instrument.herokuapp.com/tool/${email}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => {
        if (res.status === 401) {
          toast.error("Unauthorized access");
        } else if (res.status === 403) {
          toast.error("Forbidden access");
        }
        return res.json();
      })
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
