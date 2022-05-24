import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const { data: orders, isLoading } = useQuery("orders", () =>
    fetch("http://localhost:5000/order").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(orders);
  return (
    <div className="p-3 mt-6 md:mr-16">
      <h1 className="text-4xl text-base-100 font-bold capitalize font-serif">
        Your all orders
      </h1>
      <div class="overflow-x-auto mt-5 rounded-lg">
        <table class="table table-zebra w-full mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Order Name</th>
              <th>Order Quantity</th>
              <th>Total Price</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <MyOrderRow
                key={order._id}
                order={order}
                index={index}
              ></MyOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
