import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import OrderRow from "./OrderRow";

const ManageOrders = () => {
  const { data: orders, isLoading } = useQuery("products", () =>
    fetch("http://localhost:5000/all-order").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="m-3 md:m-10">
      <h1 className="text-xl md:text-2xl text-base-100 font-bold capitalize">
        Manage all orders
      </h1>

      <div className="overflow-x-auto mt-5 rounded-lg">
        <table className="table table-zebra w-full mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Order Name</th>
              <th>Order Quantity</th>
              <th>Total Price</th>
              <th>Payment Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderRow key={order._id} order={order}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
