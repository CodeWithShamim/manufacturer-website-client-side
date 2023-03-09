import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const UpdateProfile = ({ setActiveProfile, refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [{ displayName, email, photoURL }] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const { name, email, phone, address, education, linkedin } = data;
    // console.log(name, email, phone, address, education, linkedin);
    const profile = {
      img: photoURL,
      name,
      email,
      phone,
      address,
      education,
      linkedin,
    };

    try {
      const response = await axios.put(
        "https://rri-server.vercel.app/profile",
        profile
      );
      if (response) {
        refetch();
        reset();
        toast.success("Profile updated");
        setMessage("Profile updated");
        setActiveProfile("myProfile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="m-3 p-6 md:m-8 bg-base-100 rounded-lg font-serif">
        <div className="flex items-center justify-between">
          <div
            onClick={() => setActiveProfile("myProfile")}
            className="text-3xl font-semibold text-left text-primary"
          >
            My Profile
          </div>
        </div>
        <hr className="my-6" />
        {/* _______________________________________ */}
        <div className="flex flex-col md:flex-row items-center md:items-start p-3">
          {/* ____left side___ */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <img
              className="rounded-full w-38 h-28 md:w-40 md:h-40"
              src={photoURL}
              alt={displayName}
            />
          </div>

          {/* ____right side_____  */}
          <div className="flex-1 text-left mt-6 md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name" className="font-sans text-gray-300">
                Name can't change
              </label>
              <input
                className="border-2 border-base-300 bg-base-100 outline-0 font-bold text-gray-400 rounded-lg p-3 mb-3 w-full"
                type="text"
                {...register("name")}
                name="name"
                id="name"
                readOnly
                value={displayName}
              />
              {/* _______name field end__________  */}
              {/* ____email field start_____  */}
              <label htmlFor="email" className="font-sans text-gray-300">
                Email can't change
              </label>
              <input
                className="border-2 border-base-300 bg-base-100 outline-0 font-bold text-gray-400 rounded-lg p-3 mb-3 w-full"
                type="email"
                {...register("email")}
                name="email"
                id="email"
                readOnly
                value={email}
              />
              {/* _____email field end______  */}
              {/* phone field start_________  */}
              <label htmlFor="password">Phone *</label>
              <input
                className="border-2 font-sans text-black border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
                type="number"
                placeholder="Ex:- 017628100**"
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
              <div className="mb-3">
                <label>
                  {errors.phone?.type === "required" && (
                    <span className="text-red-500 text-sm">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              {/* phone field end_________  */}
              {/* _______address field start__________  */}
              <label htmlFor="address">Address *</label>
              <textarea
                className="border-2 text-black border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
                name="address"
                id="address"
                cols="30"
                rows="3"
                placeholder="street address, city/division"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is required",
                  },
                })}
              ></textarea>
              {/* Show error meassage for address */}
              <div className="mb-3">
                <label className="mb-3">
                  {errors.address?.type === "required" && (
                    <span className="text-red-500 text-sm">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              {/* address field end_________  */}

              {/* education field start__________  */}
              <label htmlFor="education">Education *</label>
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

              {/* linkedin field end_________  */}
              <label htmlFor="linkedin">Linkedin Profile Link *</label>
              <input
                className="border-2 text-black border-base-300 outline-1 outline-red-200 rounded-lg p-3 w-full"
                type="text"
                {...register("linkedin", {
                  required: {
                    value: true,
                    message: "Profile link is required",
                  },
                })}
                name="linkedin"
                id="linkedin"
                placeholder="Add your linkedin profile link"
              />
              {/* Show error meassage for education */}
              <div className="mb-3">
                <label className="mb-3">
                  {errors.linkedin?.type === "required" && (
                    <span className="text-red-500 text-sm">
                      {errors.linkedin.message}
                    </span>
                  )}
                </label>
              </div>
              {/* _______linkedin field end__________  */}

              {/* show success message  */}
              {message && (
                <p className="bg-success my-3 p-2 text-base-100 font-bold rounded-sm">
                  {message}
                </p>
              )}

              <div className="flex items-center justify-center">
                <div className="text-center">
                  <input
                    className="btn btn-sm btn-primary text-base-100 mx-auto text-md font-bold rounded-full"
                    type="submit"
                    value="Update"
                  />
                </div>
                <div
                  onClick={() => setActiveProfile("myProfile")}
                  className="btn btn-sm ml-6 btn-error text-base-100 rounded-full"
                >
                  Cancel
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
