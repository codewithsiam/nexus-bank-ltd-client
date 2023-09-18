import React from "react";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { baseUrl } from "../../../config/server";
import Swal from "sweetalert2";

const ApplyLoan = () => {
  const { handleSubmit, reset, control } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);

    data.status = "pending";
    data.email = user.email;

    fetch(`${baseUrl}/loans`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Loan application submitted successfully",
            showConfirmButton: false,
            timer: 2000
          });
          reset(); // Reset the form
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Loan application submission failed",
            showConfirmButton: false,
            timer: 2000
          });
        }
      })
      .catch((error) => {
        console.error("An error occurred", error);
      });
  };
  // Check if user is defined and contains displayName and email
  const defaultName = user?.displayName || '';
  const defaultEmail = user?.email || '';

  return (
    <>
      <section className=" gradient-form bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-screen">
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
                        <h4 className="mt-1 text-xl font-semibold text-primary text-center">
                          Request for apply loan!
                        </h4>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit(onSubmit)} className="text-black py-10 -mt-10">
                        <div className="relative">
                          <Controller
                            name="name"
                            control={control}
                            defaultValue={defaultName}
                            render={({ field }) => (
                              <input
                                {...field}
                                type="text"
                                className="w-full border outline-none rounded-lg border-white bg-base text-sm shadow-sm"
                                readOnly
                              />
                            )}
                          />
                        </div>

                        <div className="relative mt-2">
                          <Controller
                            name="email"
                            control={control}
                            defaultValue={defaultEmail}
                            render={({ field }) => (
                              <input
                                {...field}
                                type="email"
                                className="w-full border outline-none rounded-lg border-white bg-base text-sm shadow-sm"
                                readOnly
                              />
                            )}
                          />
                        </div>

                        <div className="relative mt-2">
                          <Controller
                            name="loanAmount"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                              <input
                                {...field}
                                type="number"
                                className="w-full border outline-none rounded-lg border-gray-300 bg-base p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter loan amount"
                              />
                            )}
                          />
                        </div>

                        <div className="relative mt-2">
                          <Controller
                            name="loanPurpose"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                              <input
                                {...field}
                                type="text"
                                className="w-full border outline-none rounded-lg border-gray-300 bg-base p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter loan purpose"
                              />
                            )}
                          />
                        </div>

                        <button type="submit" className="bg-gradient-to-r from-[#004D6E] to-[#00ACCC] py-2 px-2 rounded text-white mt-6 w-full">
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
