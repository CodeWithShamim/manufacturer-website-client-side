import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  //   get client secret
  const { totalPrice: price } = data;
  console.log(price);
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  console.log(clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error: paymentError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
    if (paymentError) {
      setError(paymentError?.message);
    } else {
      setError("");
      console.log(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="border bg-slate-300 border-base-100 p-3 rounded" />
      <button
        className="btn btn-xs text-base-100 px-6 my-3 btn-success"
        type="submit"
        disabled={!stripe || !elements || !clientSecret}
      >
        Pay
      </button>
      {error && <p className="text-red-400">{error}</p>}
    </form>
  );
};

export default CheckoutForm;
