import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const CheckoutForm = ({ data }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { totalPrice: price, name, email, phone } = data;

  //   get client secret
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error: paymentError } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (paymentError) {
      setSuccess("");
      setError(paymentError?.message);
    } else {
      setError("");
      const { paymentIntent, error: intentError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name,
              email,
              phone,
            },
          },
        });
      if (intentError) {
        setSuccess("");
        setError(intentError?.message);
      } else {
        setError("");
        console.log(paymentIntent.id);
        setSuccess("Congrats, Your payment is completed");

        // update order data for backend

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
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
      {success && <p className="text-green-400">{success}</p>}
    </form>
  );
};

export default CheckoutForm;
