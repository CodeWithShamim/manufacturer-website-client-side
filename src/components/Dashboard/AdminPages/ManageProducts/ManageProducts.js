import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import ProductDeleteConfirmModal from "./ProductDeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [product, setProduct] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://ryan-refrigerator-instrument.herokuapp.com/tool").then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="m-3 md:m-10">
      <h1 className="text-xl md:text-2xl text-base-100 font-bold uppercase">
        Manage all products
      </h1>

      <div className="overflow-x-auto mt-5 rounded-lg">
        <table className="table w-full mx-auto">
          <thead className="text-base-100">
            <tr>
              <th className="bg-blue-600"></th>
              <th className="bg-blue-600">Name</th>
              <th className="bg-blue-600">Minimum Quantity</th>
              <th className="bg-blue-600">Available Stock</th>
              <th className="bg-blue-600">Price</th>
              <th className="bg-blue-600">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <ProductRow
                key={product._id}
                product={product}
                setProduct={setProduct}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>

      {product && (
        <ProductDeleteConfirmModal
          product={product}
          setProduct={setProduct}
          refetch={refetch}
        ></ProductDeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProducts;
