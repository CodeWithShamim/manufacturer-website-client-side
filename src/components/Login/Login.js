import React from "react";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";

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
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // ______navigate when received token_________
  if (user || googleUser) {
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
    <div class="hero min-h-screen font-serif bg-primary">
      <div class="hero-content flex-col lg:flex-row-reverse">
        {/* _______Login card start__________ */}
        <div className="card md:w-3/5 shadow-2xl bg-base-100">
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
                <Link to="/signup"> Sign up</Link>
              </span>
            </p>
            {/* ______________  */}
          </div>
          {/* __________card body end__________ */}
        </div>
        {/* _______login card end */}

        {/* ______________left side____________ */}
        <div class="text-center lg:text-left md:w-4/5 pt-10">
          <h1 class="text-5xl font-bold text-left">Login now!</h1>
          <p class="py-6 text-left">
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

export default Login;
