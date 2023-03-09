import React from "react";
import { toast } from "react-toastify";

const OrderDeleteConfirmModal = ({ order, setOrder, refetch }) => {
  const { _id, orderName } = order;
  //   delete order
  const handleDeleteOrder = (id) => {
    fetch(`https://rri-server.vercel.app/order/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
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
        setOrder(null);
        if (data.deletedCount) {
          toast.success(
            `Succfully deleted ${orderName.slice(0, 20)} this item`
          );
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="order-delete-modal" className="modal-toggle" />
      <div className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-400">
            Are you sure! You want to delete this item.
          </h3>
          <p className="py-4">{orderName}</p>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteOrder(_id)}
              className="btn btn-success text-base-100"
            >
              Submit
            </button>
            <label htmlFor="order-delete-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeleteConfirmModal;
