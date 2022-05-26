import React from "react";

const UserRow = ({ user, setUser }) => {
  const { email } = user;

  return (
    <tr>
      <th>icon</th>
      <td>{email}</td>
      <td>
        <button className="btn btn-success btn-xs">Make Admin</button>
      </td>
      <td>
        <label
          onClick={() => setUser(user)}
          htmlFor="user-delete-modal"
          className="btn btn-xs btn-error text-base-100"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
