import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import MyOrderRow from "./MyOrderRow";
import OrderDeleteConfirmModal from "./OrderDeleteConfirmModal";

const MyOrders = () => {
  const [{ email }] = useAuthState(auth);
  const [order, setOrder] = useState(null);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(
      `https://ryan-refrigerator-instrument.herokuapp.com/order/${email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-3 mt-6">
      <h1 className="text-2xl md:text-3xl text-base-100 font-bold uppercase font-serif">
        Your all orders
      </h1>
      <div className="overflow-x-auto mt-5 rounded-lg">
        <table className="table w-full mx-auto">
          <thead className="text-base-100">
            <tr>
              <th className="bg-black"></th>
              <th className="bg-black">Order Name</th>
              <th className="bg-black">Order Quantity</th>
              <th className="bg-black">Total Price</th>
              <th className="bg-black">Payment Status</th>
              <th className="bg-black">Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <MyOrderRow
                key={order._id}
                order={order}
                setOrder={setOrder}
                index={index}
              ></MyOrderRow>
            ))}
          </tbody>
        </table>
      </div>

      {order && (
        <OrderDeleteConfirmModal
          order={order}
          setOrder={setOrder}
          refetch={refetch}
        ></OrderDeleteConfirmModal>
      )}
    </div>
  );
};

export default MyOrders;
