import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const UserRow = ({ user: oldUser, setUser, refetch }) => {
  const { _id, role, email } = oldUser;

  const [user] = useAuthState(auth);
  const { email: userEmail } = user;

  const handleMakeAdmin = async (id) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/user/${userEmail}`,
        { id }
      );
      if (data.modifiedCount) {
        refetch();
        toast.success(`Succussfully create admin for ${email}`);
      }
    } catch (error) {
      toast.error(error?.message);
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
            onClick={() => setUser(oldUser)}
            htmlFor="user-delete-modal"
            className="btn btn-xs btn-error text-base-100"
          >
            Delete admin
          </label>
        ) : (
          <label
            onClick={() => setUser(oldUser)}
            htmlFor="user-delete-modal"
            className="btn btn-xs btn-error text-base-100"
          >
            Delete user
          </label>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
