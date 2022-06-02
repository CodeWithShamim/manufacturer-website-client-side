import React from "react";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaGooglePlusG } from "react-icons/fa";
import useToken from "../../hooks/useToken";
import log from "../../images/log.jpg";
import "./Login.css";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user || googleUser);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // ______navigate when received token_________
  if (token) {
    navigate(from, { replace: true });
  }

  // _________get error________
  let signInError;
  if (googleError || error) {
    signInError = googleError?.code || error?.code;
  }

  // ________use react hook form_________
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  return (
    //
    <div className="hero min-h-screen font-serif bg-primary form-container">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* _______Login card start__________ */}
        <div
          data-aos="flip-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="card md:w-3/5 shadow-2xl bg-base-100"
        >
          {/* ________card body start_______ */}
          <div className="card-body items-center text-left w-full">
            <h2 className="card-title text-4xl text-blue-500 pb-6">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid w-full">
              {/* ____email field start_____  */}
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

              <span className="mb-4 text-xs p-2 cursor-pointer font-bold text-blue-400">
                Forgotton password?
              </span>

              {/* _________show error & loading________  */}
              <small className="text-red-500 text-center pb-2">
                {signInError}
              </small>
              <input
                className="btn btn-error w-full text-base-100 text-md p-3 font-bold rounded-3xl"
                type="submit"
                value={loading ? "Loading......." : "Login"}
              />
            </form>

            {/* _______suggest for sign up_______ */}
            <p className="px-6 py-2 font-sans">
              Dont't have an account?
              <span className="text-blue-400 font-bold text-sm cursor-pointer">
                <Link to="/register"> Sign up</Link>
              </span>
            </p>
            {/* _________divider__________ */}
            <div className="flex flex-col w-3/5 border-opacity-50">
              <div className="divider">OR</div>
              {/* _________google sign in & show loading____________ */}

              {googleLoading ? (
                <button className="btn loading btn-error">loading</button>
              ) : (
                <div
                  onClick={() => signInWithGoogle()}
                  className="btn btn-outline text-black"
                >
                  CONTINUE WITH GOOGLE
                </div>
              )}
            </div>
            {/* __________divider end_____________ */}
          </div>
          {/* __________card body end__________ */}
        </div>
        {/* _______login card end */}

        {/* ______________left side____________ */}
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-center lg:text-left md:w-3/5 pt-10"
        >
          <img className="w-full h-full rounded-full" src={log} alt="" />
        </div>

        {/* ________________________  */}
      </div>
    </div>
  );
};

export default Login;
