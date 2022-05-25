import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Payment = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery("order", () =>
    fetch(`http://localhost:5000/orderItem/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-8 m-3 md:m-10 bg-base-100 text-left rounded-lg font-serif flex items-center justify-center">
      {/* ---left side---  */}
      <div className="flex-1">
        <h1 className="text-primary text-2xl">Hello, {data?.name}</h1>
        <h1 className="text-primary text-md font-semibold font-sans pt-1 pb-4">
          Please pay for
          <span className="text-cyan-400"> {data?.orderName}</span>
        </h1>
        <div className="card w-96 glass">
          <figure>
            <img src={data?.img} alt="item-img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-sans font-semibold text-xl text-green-400">
              Total Pay:
              <span className="font-sans font-semibold text-xl text-black">
                ${data?.totalPrice}
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* ---right side--*/}
      <div className="bg-secondary">ffff</div>
    </div>
  );
};

export default Payment;
