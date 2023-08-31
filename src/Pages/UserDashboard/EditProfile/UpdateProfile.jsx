import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const EditProfile = () => {
  const profileData = useLoaderData();
  console.log(profileData)
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, watch, formState: { errors },} = useForm();

  const onSubmit = (data) => {
    data.price = Number(data.price);
    fetch(`${baseUrl}/update_Profile/${toy._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount>0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Profile Info updated successful",
          });
        }
        
      });
  };

  return (
    <div>
      {/* <div className="hero py-5 md:min-h-screen bg-[#ccf7ff]">
        <div className="hero-content flex-col">
          <h2 className="text-3xl font-bold">Update Toy</h2>
          <div className="card w-full  md:w-[500px]  shadow-2xl bg-base-100">
            <div className="card-body">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control px-2 my-6">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      className="input w-full input-bordered"
                      placeholder="Price"
                      defaultValue={toy.price}
                      {...register("price", { required: true })}
                    />

                    {errors.price && (
                      <span className="text-red-600">
                        Provide Toy Price
                      </span>
                    )}
                  </div>

                  <div className="form-control my-6">
                    <label className="label">
                      <span className="label-text">Available quantity</span>
                    </label>
                    <input
                      className="input input-bordered"
                      placeholder="Available quantity"
                      defaultValue={toy.available_quantity}
                      {...register("available_quantity", { required: true })}
                    />
                    {errors.available_quantity && (
                      <span className="text-red-600">Provide Toy Quantity</span>
                    )}
                  </div>

                  <div className="form-control my-6">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      className="input input-bordered"
                      placeholder="description"
                      defaultValue={toy.description}
                      {...register("description", { required: true })}
                    />
                    {errors.description && (
                      <span className="text-red-600">
                        Provide Toy description
                      </span>
                    )}
                  </div>

                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Update Toy"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <h1 className="mt-20">hellow</h1>
    </div>
  );
};

export default EditProfile;
