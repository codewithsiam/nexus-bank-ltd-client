import React from "react";
import Google from "../../components/Google/Google";
import registrationImage from "../../assets/images/Registration/registration-img.png";
import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {

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

        <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <RegistrationForm />

          <Google />
        </div>
      </div>
    </section>
  );
};

export default Registration;
