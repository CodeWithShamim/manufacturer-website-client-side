import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import UserDeleteConfirmModal from "./UserDeleteConfirmModal";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const [user, setUser] = useState(null);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://rri-server.vercel.app/user").then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="m-3 md:m-10">
      <h1 className="text-xl md:text-2xl text-base-100 font-bold uppercase">
        Create admin
      </h1>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full mx-auto">
          <thead className="text-base-100">
            <tr>
              <th className="bg-black"></th>
              <th className="bg-black">Email</th>
              <th className="bg-black">Make Admin</th>
              <th className="bg-black">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <UserRow
                key={user._id}
                user={user}
                setUser={setUser}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
      {user && (
        <UserDeleteConfirmModal
          user={user}
          setUser={setUser}
          refetch={refetch}
        ></UserDeleteConfirmModal>
      )}
    </div>
  );
};

export default MakeAdmin;
