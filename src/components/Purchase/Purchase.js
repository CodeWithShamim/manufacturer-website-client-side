import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isLoading, setIsLoading] = useState(true);

  // get tool value
  const [tool, setTool] = useState({});
  const {
    name: toolName,
    img,
    price,
    minimumQuantity,
    availableQuantity,
  } = tool;

  const [orderQuantity, setOrderQuantity] = useState(0);
  useEffect(() => {
    setOrderQuantity(minimumQuantity);
  }, [minimumQuantity, orderQuantity]);

  // change order qunatity
  const handleOrderQuantity = (e) => {
    e.preventDefault();
    const increaseQunatity = e.target.increaseOrderQuantity.value;
    const updateQuantity = orderQuantity + parseFloat(increaseQunatity);
  };
  // calculate total price
  const totalToolPrice = orderQuantity * price;

  // _____fetch data by id_________
  useEffect(() => {
    fetch(`https://ryan-refrigerator-instrument.herokuapp.com/tool/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setTool(data);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  // ________order listed in db_________
  const onSubmit = async (data) => {
    const { name, email, phone, address } = data;

    const order = {
      toolId: id,
      toolName,
      totalToolPrice,
      name,
      email,
      phone,
      address,
    };
    console.log(order);
  };

  return (
    <div
      className="hero min-h-screen font-serif"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-base-100">
        <div className="max-w-xl">
          <div>
            <h1 className="mb-5 text-2xl font-bold">
              <span className="text-secondary">Purchase For:</span> {toolName}
            </h1>
            <h1>
              <span className="text-secondary">Per Unit Price:</span>{" "}
              <span className="font-sans font-bold text-xl">${price}</span>
            </h1>
            <h1>
              <span className="text-secondary">Total Price: </span>{" "}
              <span className="font-sans font-bold text-xl">
                ${totalToolPrice}
              </span>
            </h1>
            <h1>
              <span className="text-secondary">Order Quantity:</span>{" "}
              <span className="font-sans font-bold text-xl">
                {orderQuantity}
              </span>
            </h1>
          </div>

          {/* ______order qunatity field start__________  */}
          <div className="my-3">
            <h1 className="text-xl text-secondary">Change Order Quantity</h1>
            <form onSubmit={handleOrderQuantity}>
              <input
                type="number"
                className="rounded-full p-3 text-black font-sans font-semibold border-0 outline-none m-2"
                name="increaseOrderQuantity"
                id="increaseOrderQuantity"
                placeholder="+"
              />
              <input
                type="number"
                className="rounded-full p-3 text-black font-sans font-semibold border-0 outline-none m-2"
                name="decreaseOrderQuantity"
                id="decreaseOrderQuantity"
                placeholder="-"
              />
              <input className="btn btn-error" type="submit" value="Change" />
            </form>
          </div>
          {/* ______order qunatity field end__________  */}

          {/* _______form section start________ */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid w-full text-left font-semibold font-serif shadow-3xl bg-primary p-8 rounded-lg mt-4"
          >
            <label htmlFor="address">Name</label>
            <input
              className="border-2 border-base-100 bg-base-300 outline-0 font-bold rounded-lg p-3 mb-3 w-full"
              type="text"
              {...register("name")}
              name="name"
              id="name"
              readOnly
              value={user?.displayName}
            />
            {/* _______name field end__________  */}

            {/* ____email field start_____  */}
            <label htmlFor="email">Email</label>
            <input
              className="border-2 border-base-100 bg-base-300 outline-0 font-bold rounded-lg p-3 mb-3 w-full"
              type="email"
              {...register("email")}
              name="email"
              id="email"
              readOnly
              value={user?.email}
            />
            {/* _____email field end______  */}

            {/* phone field start_________  */}
            <label htmlFor="password">Phone</label>
            <input
              className="border-2 font-sans text-black border-base-100 outline-1 outline-red-200 rounded-lg p-3 w-full"
              type="number"
              {...register("phone", {
                required: {
                  value: true,
                  message: "phone is required",
                },
              })}
              name="phone"
              id="phone"
            />
            {/* Show error meassage for phone */}
            <label className="mb-3">
              {errors.phone?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </label>
            {/* phone field end_________  */}

            {/* _______address field start__________  */}
            <label htmlFor="address">Address</label>
            <textarea
              className="border-2 text-black border-base-100 outline-1 outline-red-200 rounded-lg p-3 w-full"
              name="address"
              id="address"
              cols="30"
              rows="4"
              {...register("address", {
                required: {
                  value: true,
                  message: "address is required",
                },
              })}
            ></textarea>
            {/* Show error meassage for address */}
            <label className="mb-3">
              {errors.address?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.address.message}
                </span>
              )}
            </label>
            {/* address field end_________  */}

            <input
              className="btn btn-success text-base-100 text-xl font-bold rounded-xl"
              type="submit"
              value="Purchase"
            />
          </form>
          {/* _______form section end________ */}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
