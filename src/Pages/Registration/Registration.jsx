import React, { useContext } from "react";
import Google from "../../components/Google/Google";
import registrationImage from "../../assets/images/Registration/registration-img.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { registration, verifyEmail } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // show and hide password
  const handleShowHidePassword = () => {
    setShowOne(!showOne);
  };
  const handleShowHideConfirmPassword = () => {
    setShowTwo(!showTwo);
  };

  // registration
  const onSubmit = (data) => {
    // validation
    if (!/(?=.*?[A-Z])/.test(data.password && data.confirmPassword)) {
      setError("At least one uppercase letter");
      return;
    } else if (!/(?=.*?[a-z])/.test(data.password && data.confirmPassword)) {
      setError("At least one lowercase letter");
      return;
    } else if (!/(?=.*?[0-9])/.test(data.password && data.confirmPassword)) {
      setError("At least one number");
      return;
    } else if (!/(?=.*[!#$%&?"])/.test(data.password && data.confirmPassword)) {
      setError("At least one special character");
      return;
    }

    setError("");

    if (data.password === data.confirmPassword) {
      registration(data.email, data.password)
        .then((result) => {
          const registeredUser = result;
          console.log(registeredUser);
          setError("");
          navigate(from, { navigate: true });

          verifyEmail(result.user).then((result) => {
            console.log(result);
            alert("Please verify your email");
          });
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Password does not match");
    }
  };

  return (
    <section className="max-w-screen-2xl mx-auto flex flex-wrap lg:h-screen lg:items-center">
      <div className="">
        <img alt="Welcome" src={registrationImage} className="" />
      </div>
      <div className="w-full px-4  sm:px-6 sm:py-16 lg:w-1/2 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Registration!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label for="email" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                {...register("name", { required: true })}
                type="text"
                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Your Name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-400 mt-2">Name is required</p>
              )}
            </div>
          </div>

          <div>
            <label for="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Your Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-400 mt-2">Email is required</p>
              )}
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                {...register("password", { required: true })}
                type={showOne ? "text" : "password"}
                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-400 mt-2">Password is required</p>
              )}

              <span
                onClick={handleShowHidePassword}
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
              >
                {showOne ? (
                  <AiFillEye size={20} className="cursor-pointer" />
                ) : (
                  <AiFillEyeInvisible size={20} className="cursor-pointer" />
                )}
              </span>
            </div>

            <div className="relative mt-5">
              <input
                {...register("confirmPassword", { required: true })}
                type={showTwo ? "text" : "password"}
                className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Confirm Password"
              />
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-400 mt-2">
                  Confirm Password is required
                </p>
              )}

              <span
                onClick={handleShowHideConfirmPassword}
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
              >
                {showTwo ? (
                  <AiFillEye size={20} className="cursor-pointer" />
                ) : (
                  <AiFillEyeInvisible size={20} className="cursor-pointer" />
                )}
              </span>
            </div>
          </div>

          <div>
            <p className="text-red-500 text-center">{error}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Already have an account ?
              <Link className="underline" to="/login">
                {" "}
                Sign in
              </Link>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign up
            </button>
          </div>

          <Google />
        </form>
      </div>
    </section>
  );
};

export default Registration;
