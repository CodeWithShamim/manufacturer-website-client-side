import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Purchase = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [tool, setTool] = useState({});
  const { name, img, price } = tool;
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
    console.log(name, email, phone, address);
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
        <div className="max-w-md">
          <div>
            <h1 className="mb-5 text-2xl font-bold">
              <span className="text-secondary">Purchase for:</span> {name}
            </h1>
            <h1>
              {" "}
              <span className="text-secondary">Per unit price:</span> ${price}
            </h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid w-full text-left font-semibold font-serif"
          >
            <label htmlFor="address">Name</label>
            <input
              className="border-2 border-base-100 outline-1 outline-red-200 rounded-lg p-3 mb-3 w-full"
              type="name"
              {...register("name")}
              name="name"
              id="name"
              disabled
              readOnly
              value={user?.displayName}
            />
            {/* _______name field end__________  */}

            {/* ____email field start_____  */}
            <label htmlFor="email">Email</label>
            <input
              className="border-2 border-base-100 outline-1 outline-red-200 rounded-lg p-3 mb-3 w-full"
              type="email"
              {...register("email")}
              name="email"
              id="email"
              disabled
              readOnly
              value={user?.email}
            />
            {/* _____email field end______  */}

            {/* phone field start_________  */}
            <label htmlFor="password">Phone</label>
            <input
              className="border-2 text-black border-base-100 outline-1 outline-red-200 rounded-lg p-3 w-full"
              type="password"
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
              className="btn btn-warning text-base-100 text-md p-4 font-bold rounded-xl"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
