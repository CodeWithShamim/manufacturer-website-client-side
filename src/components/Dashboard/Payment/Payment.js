import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm ";

const Payment = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery("order", () =>
    fetch(`http://localhost:5000/orderItem/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  //   _________stripe info______
  const stripePromise = loadStripe(
    "pk_test_51L3Em5GYQC379Dl5AKLXm83RNgntY8lR6fuPgYYVcIiUjwKqmKrBXdroV0Qhcdg2wzqIRiUUVJz1wHPYypaWmvcu00X7xm0VIB"
  );

  return (
    <div className=" flex flex-col md:flex-row items-center justify-center p-8 m-3 md:m-10 bg-base-100 text-left rounded-lg font-serif">
      {/* ---left side---  */}
      <div className="flex-1">
        <h1 className="text-primary text-2xl">Hello, {data?.name}</h1>
        <h1 className="text-primary text-md font-semibold font-sans pt-1 pb-4">
          Please pay for
          <span className="text-cyan-400"> {data?.orderName}</span>
        </h1>
        <div className="card w-full glass">
          <figure>
            <img className="w-72 h-72" src={data?.img} alt="item-img" />
          </figure>
          {/* <div className="card-body"></div> */}
        </div>
      </div>

      {/* ---right side--*/}
      {/* __________stripe payment form________ */}
      <div className="bg-black text-base-100 p-12 rounded-lg shadow-2xl flex-1 md:mx-6 mt-6 md:mt-24">
        <h2 className="my-6 card-title font-sans font-semibold text-xl">
          Total Pay:
          <span className="font-sans font-semibold text-xl">
            ${data?.totalPrice}
          </span>
        </h2>
        {/* _______card form_______ */}
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
