import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ data }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { _id, totalPrice: price, name, email, phone } = data;

  //   get client secret
  useEffect(() => {
    fetch(
      "https://ryan-refrigerator-instrument.herokuapp.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    setIsLoading(true);
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
      setIsLoading(false);
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
        setIsLoading(false);
        setSuccess("");
        setError(intentError?.message);
      } else {
        setIsLoading(false);
        setError("");
        const transactionId = paymentIntent?.id;
        setSuccess("Congrats, Your payment is completed");

        // update order data for backend
        try {
          axios.patch(
            `https://ryan-refrigerator-instrument.herokuapp.com/order/${_id}`,
            {
              transactionId,
            }
          );
        } catch (error) {
          console.log(error);
        }

        setTimeout(() => {
          navigate("/dashboard/myOrders");
        }, 1500);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="border bg-slate-300 border-base-100 p-3 rounded" />
      {isLoading ? (
        <button class="btn btn-square loading"></button>
      ) : (
        <button
          className="btn btn-xs text-base-100 px-6 my-3 btn-success"
          type="submit"
          disabled={!stripe || !elements || !clientSecret}
        >
          Pay
        </button>
      )}
      {error && <p className="text-red-400">{error}</p>}
      {success && <p className="text-green-400">{success}</p>}
    </form>
  );
};

export default CheckoutForm;
