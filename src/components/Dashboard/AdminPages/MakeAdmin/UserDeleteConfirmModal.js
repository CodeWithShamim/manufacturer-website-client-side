import React from "react";
import { toast } from "react-toastify";

const UserDeleteConfirmModal = ({ user, setUser, refetch }) => {
  const { _id, email } = user;

  //   delete user
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
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
        setUser(null);
        if (data.deletedCount) {
          toast.success(`Succfully deleted ${email} this user`);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="user-delete-modal" className="modal-toggle" />
      <div className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-400">
            Are you sure! You want to delete this user.
          </h3>
          <p className="py-4">{email}</p>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteUser(_id)}
              className="btn btn-success text-base-100"
            >
              Submit
            </button>
            <label htmlFor="user-delete-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeleteConfirmModal;
