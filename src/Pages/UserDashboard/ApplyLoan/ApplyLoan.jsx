import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
// import Swal from "sweetalert2";

const ApplyLoan = () => {
  const { handleSubmit, register, reset } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      data.status = "pending";
      data.email = user.email;
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/apply-loan`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Loan application submitted successfully",
          showConfirmButton: false,
          timer: 2000
        })
        reset();
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: "Loan application submission failed",
          showConfirmButton: false,
          timer: 2000
        })
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <>
      <section className=" gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-[400px]">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* Left column container */}
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      {/* Logo */}
                      <div className="text-center mt-16">
                        <img
                          className="mx-auto w-48"
                          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                        <h4 className="mt-1 text-xl font-semibold">
                          Request for apply loan!
                        </h4>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit(onSubmit)} className="text-black py-10 ml-20 -mt-10">
                        <div className="relative">
                          <input
                            {...register("name", { required: true })}
                            type="text"
                            className="w-full border outline-none rounded-lg border-white bg-base p-4 pe-12 text-sm shadow-sm"
                            defaultValue={user?.displayName}
                            readOnly
                          />
                        </div>

                        <div className="relative mt-2">
                          <input
                            {...register("email")}
                            type="email"
                            className="w-full border outline-none rounded-lg border-white bg-base p-4 pe-12 text-sm shadow-sm"
                            defaultValue={user?.email}
                            readOnly
                          />
                        </div>

                        <div className="relative mt-2 ">
                          <input
                            {...register("loanAmount", { required: true })}
                            type="number"
                            className="w-full border outline-none rounded-lg border-gray-300 bg-base p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter loan amount"
                          />
                        </div>

                        <div className="relative mt-2">
                          <input
                            {...register("loanPurpose", { required: true })}
                            type="text"
                            className="w-full border outline-none rounded-lg border-gray-300 bg-base p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter loan purpose"
                          />
                        </div>
                        <button type="submit" className="bg-gradient-to-r  from-[#004D6E] to-[#00ACCC] py-2 px-2 rounded text-white mt-6">
                        Apply for Loan
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* Right column container */}
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r  from-[#004D6E] to-[#00ACCC]"
                    
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12 hidden lg:block">
                      <h4 className="mb-6 text-xl font-semibold">
                      Apply for a Loan with Nexus Bank Limited
                      </h4>
                      <p className="text-sm">
                      Experience financial empowerment with Nexus Bank Limited. Our easy and hassle-free loan application process is tailored to help you realize your aspirations. Whether it's funding your education, renovating your home, or expanding your business, our range of loan options offers flexibility and competitive rates. Step into a brighter future by completing the form below. Let us partner with you to achieve your dreams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyLoan;
