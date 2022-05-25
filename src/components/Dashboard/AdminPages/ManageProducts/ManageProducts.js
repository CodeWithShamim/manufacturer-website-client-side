import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("http://localhost:5000/tool").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="m-3 md:m-10">
      <h1 className="text-xl md:text-2xl text-base-100 font-bold capitalize">
        Manage all products
      </h1>

      <div className="overflow-x-auto mt-5 rounded-lg">
        <table className="table table-zebra w-full mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Minimum Quantity</th>
              <th>Available Stock</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <ProductRow key={product._id} product={product}></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
