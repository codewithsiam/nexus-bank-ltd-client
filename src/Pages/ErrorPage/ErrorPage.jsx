import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-black rounded-lg shadow-lg bg-opacity-20">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img
            src="https://illustrations.popsy.co/purple/resistance-band.svg"
            alt="question-mark"
            className="h-auto w-full md:w-1/3 rounded-lg"
          />
          <div className="mt-8 md:mt-0 ">
            <p className="text-red-600 text-lg font-semibold">404 error</p>
            <h1 className="mt-3 text-3xl font-bold text-gray-800">
              Oops! This page doesn&apos;t exist.
            </h1>
            <p className="mt-4 text-gray-600">
              Sorry, the page you are looking for may have been removed or
              relocated.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-green-500 hover:bg-green-700 rounded-lg transition duration-300"
              >
                <ArrowCircleLeftIcon className="mr-2" />
                Go back
              </Link>
              <Link to="/contact">
                <button
                  type="button"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#08587a] hover:bg-[#0f82b3] rounded-lg transition duration-300"
                >
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
