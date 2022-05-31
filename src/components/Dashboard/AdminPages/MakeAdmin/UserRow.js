import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  FaUserEdit,
  FaTrashRestore,
  FaCheckCircle,
  FaCompressAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const UserRow = ({ user: oldUser, setUser, refetch }) => {
  const { _id, role, email } = oldUser;
  console.log(oldUser);

  const [user] = useAuthState(auth);
  const { email: userEmail } = user;

  const handleMakeAdmin = async (id) => {
    try {
      const { data } = await axios.patch(
        `https://ryan-refrigerator-instrument.herokuapp.com/user/${userEmail}`,
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
        <FaUserEdit className="text-red-500 text-xl" />
      </th>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          <button className="btn btn-xs btn-disabled capitalize bg-green-300 text-white">
            <FaCheckCircle />
            Already admin
          </button>
        ) : (
          <button
            onClick={() => handleMakeAdmin(_id)}
            className="btn btn-success btn-xs text-white"
          >
            Make Admin <FaCompressAlt />
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
            <FaTrashRestore className="m-1" />
          </label>
        ) : (
          <label
            onClick={() => setUser(oldUser)}
            htmlFor="user-delete-modal"
            className="btn btn-xs btn-error text-base-100"
          >
            Delete user
            <FaTrashRestore className="m-1" />
          </label>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
