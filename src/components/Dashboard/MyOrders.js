import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
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
    <div className="p-3 mt-6 md:mr-16">
      <h1 className="text-4xl text-base-100 font-bold capitalize font-serif">
        Your all orders
      </h1>
      <div className="overflow-x-auto mt-5 rounded-lg">
        <table className="table table-zebra w-full mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Order Name</th>
              <th>Order Quantity</th>
              <th>Total Price</th>
              <th>Cancel</th>
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
