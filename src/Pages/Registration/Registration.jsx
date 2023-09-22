import React from "react";
import Google from "../../components/Google/Google";
import registrationImage from "../../assets/images/Registration/registration-img.png";
import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center px-3 mt-11">
      <div className="">
        <img alt="Welcome" src={registrationImage} className="hidden md:block w-5/6" />
      </div>
      <div className="">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl mt-0">Registration!</h1>

          
        </div>

        <div className="mx-auto mb-0 max-w-md space-y-4">
          <RegistrationForm />

          <Google />
        </div>
      </div>
    </section>
  );
};

export default Registration;
