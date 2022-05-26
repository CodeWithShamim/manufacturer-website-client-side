import axios from "axios";
import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const UserRow = ({ user, setUser, refetch }) => {
  const { _id, role, email } = user;

  const handleMakeAdmin = async (id) => {
    try {
      const { data } = await axios.patch(`http://localhost:5000/user/${id}`);
      if (data.modifiedCount) {
        refetch();
        toast.success(`Succussfully create admin for ${email}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr>
      <th>
        <FaUserEdit />
      </th>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          <button className="btn btn-xs btn-disabled capitalize bg-green-300 text-white">
            Already admin
          </button>
        ) : (
          <button
            onClick={() => handleMakeAdmin(_id)}
            className="btn btn-success btn-xs text-white"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        {role === "admin" ? (
          <label
            onClick={() => setUser(user)}
            htmlFor="user-delete-modal"
            className="btn btn-xs btn-error text-base-100"
          >
            Delete admin
          </label>
        ) : (
          <label
            onClick={() => setUser(user)}
            htmlFor="user-delete-modal"
            className="btn btn-xs btn-error text-base-100"
          >
            Delete
          </label>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
