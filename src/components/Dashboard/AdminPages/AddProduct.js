import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const {
      name,
      img,
      minimumQuantity,
      availableQuantity,
      description,
      price,
    } = data;

    // ______upload image in imagbb______
    const image = img[0];
    const imgbbApiKey = "03686f238722f934a59c3d00457ccf73";
    const formData = new FormData();
    formData.append("image", image);
    setIsLoading(true);
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const photoURL = data.data.image.url;
          const tool = {
            name,
            img: photoURL,
            minimumQuantity,
            availableQuantity,
            description,
            price,
          };

          // add product data
          const loadProduct = async () => {
            try {
              const response = await axios.post(
                "https://ryan-refrigerator-instrument.herokuapp.com/tool",
                tool
              );
              if (response?.data?.insertedId) {
                reset();
                setIsLoading(false);
                toast.success("Product added success");
              }
            } catch (error) {
              setIsLoading(false);
              console.log(error);
            }
          };
          loadProduct();
        } else {
          setIsLoading(false);
        }
      });
  };
  return (
    <div className="m-3 md:m-8">
      <h1 className="text-xl md:text-2xl text-base-100 font-bold capitalize">
        Add a new product
      </h1>
      <div className="mt-6 text-left bg-slate-600 p-6 md:p-8 lg:16 w-100 rounded-xl">
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
            <label>
              {errors.description?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          {/* description field end_________  */}

          {/* __________profile field start_________ */}
          <label htmlFor="img" className="text-base-200 font-semibold">
            Upload product Photo
          </label>
          <input
            className="border-2 text-white border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
            type="file"
            {...register("img", {
              required: {
                value: true,
                message: "Product photo is required",
              },
            })}
            name="img"
            id="img"
          />
          {/* Show error meassage for product photo */}
          <div className="mb-3">
            <label>
              {errors.img?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.img.message}
                </span>
              )}
            </label>
          </div>
          {/* __________profile field end_________ */}

          <div className="text-center">
            {isLoading ? (
              <button className="btn btn-loading btn-success px-12 rounded-full text-base-100 loading text-center"></button>
            ) : (
              <input
                className="btn btn-success text-base-100 mx-auto text-md font-bold rounded-full"
                type="submit"
                value="Add Product"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
