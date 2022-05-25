import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const {
      name,
      img,
      minimumQuantity,
      availableQuantity,
      description,
      price,
    } = data;

    const tool = {
      name,
      img,
      minimumQuantity,
      availableQuantity,
      description,
      price,
    };

    console.log(tool);

    try {
      const response = await axios.post("http://localhost:5/tool", tool);
      if (response) {
        reset();
        toast.success("Product added success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-3 md:m-10">
      <h1 className="text-xl md:text-2xl text-base-100 font-bold capitalize">
        Add a new product
      </h1>
      <div className="mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 font-sans text-black border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Product name is required",
              },
            })}
            name="name"
            id="name"
            placeholder="Product name"
          />
          {/* Show error product name*/}
          <div className="mb-3">
            <label>
              {errors.name?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          {/* _______name field end__________  */}

          {/* minimum quantity field start_________  */}
          <input
            className="border-2 font-sans text-black border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
            type="number"
            {...register("minimumQuantity", {
              required: {
                value: true,
                message: "Minimum quantity is required",
              },
            })}
            name="minimumQuantity"
            id="minimumQuantity"
            placeholder="Minimum product quantity"
          />
          {/* Show error minimum quantity*/}
          <div className="mb-3">
            <label>
              {errors.minimumQuantity?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.minimumQuantity.message}
                </span>
              )}
            </label>
          </div>
          {/* minimum quantity field end_________  */}

          {/* available quantity field start_________  */}
          <input
            className="border-2 font-sans text-black border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
            type="number"
            {...register("availableQuantity", {
              required: {
                value: true,
                message: "Available quantity is required",
              },
            })}
            name="availableQuantity"
            id="availableQuantity"
            placeholder="Available product quantity"
          />
          {/* Show error available quantity*/}
          <div className="mb-3">
            <label>
              {errors.availableQuantity?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.availableQuantity.message}
                </span>
              )}
            </label>
          </div>
          {/* available quantity field end_________  */}

          {/* price field start_________  */}
          <input
            className="border-2 font-sans text-black border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
            type="number"
            {...register("price", {
              required: {
                value: true,
                message: "Price is required",
              },
            })}
            name="price"
            id="price"
            placeholder="Product price ( per unit price )"
          />
          {/* Show error price*/}
          <div className="mb-3">
            <label>
              {errors.price?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          {/* price field end_________  */}

          {/* description field start__________  */}
          <textarea
            className="border-2 text-black border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
            name="description"
            id="description"
            cols="30"
            rows="3"
            placeholder="Add product description"
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
          ></textarea>
          {/* Show error meassage for description */}
          <div className="mb-3">
            <label className="mb-3">
              {errors.description?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          {/* description field end_________  */}

          {/* education field start__________  */}
          <label htmlFor="education">Education</label>
          <textarea
            className="border-2 text-black border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
            name="education"
            id="education"
            cols="30"
            rows="2"
            placeholder="institute, passing year, subject"
            {...register("education", {
              required: {
                value: true,
                message: "Education is required",
              },
            })}
          ></textarea>
          {/* Show error meassage for education */}
          <div className="mb-3">
            <label className="mb-3">
              {errors.education?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.education.message}
                </span>
              )}
            </label>
          </div>
          {/* education field end_________  */}

          <div className="text-center">
            <input
              className="btn btn-sm btn-primary text-base-100 mx-auto text-md font-bold rounded-full"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
