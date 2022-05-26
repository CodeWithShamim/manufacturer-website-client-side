import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const { displayName: name, photoURL: avatar } = user;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { rating, description } = data;
    const review = {
      name,
      avatar,
      rating,
      description,
    };

    console.log(review);
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          reset();
          toast.success("Review added success");
        }
      });
  };

  return (
    <div className="font-serif p-3 md:p-16">
      <h1 className="text-xl md:text-2xl text-base-100 font-bold capitalize">
        Add a review for our company
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid w-full md:w-4/5 mx-auto text-left font-semibold font-serif shadow-3xl rounded-lg mt-4 bg-base-100 p-6 "
      >
        <label htmlFor="rating">Rating</label>
        <select
          name="rating"
          id="rating"
          className="border-2 text-black border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
          {...register("rating", {
            required: {
              value: true,
              message: "Please select any rating",
            },
          })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option selected defaultValue="5">
            5
          </option>
        </select>
        {/* Show error meassage for rating */}
        <label className="mb-3">
          {errors.rating?.type === "required" && (
            <span className="text-red-500 text-sm">
              {errors.rating.message}
            </span>
          )}
        </label>

        <label htmlFor="description">Description</label>
        <textarea
          className="border-2 text-black border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
          name="description"
          id="description"
          cols="30"
          rows="4"
          {...register("description", {
            required: {
              value: true,
              message: "Description is required",
            },
          })}
        ></textarea>
        {/* Show error meassage for Description */}
        <label className="mb-3">
          {errors.description?.type === "required" && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </label>

        <input
          className="btn btn-black btn-sm text-base-100 text-xl font-bold rounded-lg w-48 mx-auto"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddReview;
