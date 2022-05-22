import React, { useState } from "react";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // ____________update profile____________
  const [updateProfile] = useUpdateProfile(auth);
  //   _______set img_____
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user || googleUser) {
    navigate(from, { replace: true });
  }

  // _________get error________
  let signUpError;
  if (googleError || error) {
    signUpError = googleError?.code || error?.code;
  }

  // ________use react hook form_________
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name, photoURL: imageUrl });

    // ______upload image in imagbb______
    setImageUrl("");
    const image = data.profilePhoto[0];
    const imgbbApiKey = "03686f238722f934a59c3d00457ccf73";
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        try {
          if (data.success) {
            setImageUrl(data.data.image.url);
          }
        } catch (error) {
          console.log(error);
        }
      });
  };

  console.log("Up-image", imageUrl);

  return (
    //
    <div className="hero min-h-screen font-serif bg-primary">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* _______Login card start__________ */}
        <div className="card md:w-3/5 shadow-2xl bg-base-100">
          {/* ________card body start_______ */}
          <div className="card-body items-center text-left w-full">
            <h2 className="card-title text-4xl text-blue-500 pb-6">Sign up</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="grid w-full">
              <input
                className="border border-primary outline-1 outline-red-200 rounded-3xl p-3 w-full"
                type="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  maxLength: {
                    value: 20,
                    message: "Name should be maximum 20 characters",
                  },
                })}
                name="name"
                id="name"
                placeholder="Name"
              />
              {/* Show error meassage for email___________ */}
              <label className="mb-3">
                {errors.name?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "maxLength" && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </label>
              {/* _______name field end__________  */}

              {/* ____email field start_____  */}
              <label htmlFor="email">Email</label>
              <input
                className="border border-primary outline-1 outline-red-200 rounded-3xl p-3 w-full"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                    message: "Provide a valid email",
                  },
                })}
                name="email"
                id="email"
                placeholder="Email"
              />
              {/* Show error meassage for email___________ */}
              <label className="mb-3">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </label>
              {/* _____email field end______  */}

              {/* _________password field start_________  */}
              <label htmlFor="password">Password</label>
              <input
                className="border border-primary outline-1 outline-red-200 rounded-3xl p-3 w-full"
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  maxLength: {
                    value: 16,
                    message: "Password should be maximum 16 characters",
                  },
                })}
                name="password"
                id="password"
                placeholder="Password"
              />
              {/* Show error meassage for password___________ */}
              <label className="mb-3">
                {errors.password?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </label>
              {/* _________password field end_________  */}

              {/* __________profile image________ */}
              <label htmlFor="profilePhoto">Upload Profile Photo</label>
              <input
                className="border border-primary outline-1 outline-red-200 rounded-3xl p-3 w-full"
                type="file"
                {...register("profilePhoto", {
                  required: {
                    value: true,
                    message: "Profile photo is required",
                  },
                })}
                name="profilePhoto"
                id="profilePhoto"
              />
              {/* Show error meassage for profile photo */}
              <label className="mb-3">
                {errors.profilePhoto?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    {errors.profilePhoto.message}
                  </span>
                )}
              </label>

              <span className="mb-4 text-xs p-2 cursor-pointer font-bold text-blue-400">
                Forgotton password?
              </span>

              {/* _________show error & loading________  */}
              <small className="text-red-500 text-center pb-2">
                {signUpError}
              </small>
              <input
                className="btn btn-error w-full text-base-100 text-md p-3 font-bold rounded-3xl"
                type="submit"
                value={loading ? "Loading......." : "Sign up"}
              />
            </form>

            {/* _______suggest for sign up_______ */}
            <p className="px-6 py-2 font-sans">
              Already have an account?
              <span className="text-blue-400 font-bold text-sm cursor-pointer">
                <Link to="/login"> Login</Link>
              </span>
            </p>
          </div>
          {/* __________card body end__________ */}
        </div>
        {/* _______login card end */}

        {/* ______________left side____________ */}
        <div className="text-center lg:text-left md:w-4/5 pt-10">
          <h1 className="text-5xl font-bold text-left">Register now!</h1>
          <p className="py-6 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            fugiat beatae, officia blanditiis nisi natus recusandae autem
            asperiores excepturi amet maiores illo veritatis. Aut at ab minima.
            Totam, tempore iure!
          </p>
          {/* _________divider__________ */}
          <div className="flex flex-col w-3/5 border-opacity-50">
            <div className="divider text-base-100">OR</div>
            {/* _________google sign in & show loading____________ */}

            {googleLoading ? (
              <button className="btn loading btn-error">loading</button>
            ) : (
              <div
                onClick={() => signInWithGoogle()}
                className="btn btn-error outline-base-100 text-base-100"
              >
                <FaGooglePlusG className="md:text-4xl md:m-2" />
                CONTINUE WITH GOOGLE
              </div>
            )}
          </div>
          {/* __________divider end_____________ */}
        </div>

        {/* ________________________  */}
      </div>
    </div>
  );
};

export default Register;
