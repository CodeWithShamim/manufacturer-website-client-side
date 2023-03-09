import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import OrderDeleteConfirmModal from "../../MyOrders/OrderDeleteConfirmModal";
import OrderRow from "./OrderRow";

const ManageOrders = () => {
  const [order, setOrder] = useState(null);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://rri-server.vercel.app/order/all-order").then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="m-3 md:m-10">
      <h1 className="text-xl md:text-2xl text-base-100 font-bold uppercase">
        Manage all orders
      </h1>

      <div className="overflow-x-auto mt-5 rounded-lg">
        <table className="table w-full mx-auto">
          <thead className="text-base-100">
            <tr>
              <th className="bg-blue-600"></th>
              <th className="bg-blue-600">Order Name</th>
              <th className="bg-blue-600">Order Quantity</th>
              <th className="bg-blue-600">Total Price</th>
              <th className="bg-blue-600">Payment Status</th>
              <th className="bg-blue-600">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                setOrder={setOrder}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>

      {/* delete order using myOrder component modal  */}
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

export default ManageOrders;
