import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");

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
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="border bg-slate-300 border-base-100 p-3 rounded" />
      <button
        className="btn btn-xs text-base-100 px-6 my-3 btn-success"
        type="submit"
        disabled={!stripe || !elements}
      >
        Pay
      </button>
      {error && <p className="text-red-400">{error}</p>}
    </form>
  );
};

export default CheckoutForm;
