import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";
import { baseUrl } from "../../../config/server";

const imageUploadToken = 'c3182784e4720bdedd414fbd09afa2f5'
const AddBanner = () => {
    const [loading, setLoading] = useState(false)
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const uploadImage = async (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append("image", image);
    
        try {
          const response = await fetch(imageHostingUrl, {
            method: "POST",
            body: formData,
          });
          const data = await response.json();
          const imageUrl = {img: data.data.url};
          if (data.success) {
            fetch(`${baseUrl}/addBlogs`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(info)
            }).then(res => res.json()).then(data => {
                if (data.acknowledged) {
                    setLoading(false)
                    e.target.reset()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'News Added Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
          } else {
            throw new Error("Image upload failed");
          }
        } catch (error) {
          console.error("Image upload error:", error);
          throw error;
        }
      };

    const onSubmit = (data, e) => {
        console.log(data.Photo[0])
     setLoading(true)
        const img = data.Photo[0]
        const formData = new FormData();
        formData.append('image', img);
        fetch(imageHostingUrl, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            const info = { img: imgResponse.data.display_url}
            if (imgResponse.success) {
                fetch(`${baseUrl}/addBlogs`, {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(info)
                }).then(res => res.json()).then(data => {
                    if (data.acknowledged) {
                        setLoading(false)
                        e.target.reset()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'News Added Successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
            }
        })

    }

    return (
        <div className=' mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-primary'>
            <div className='p-4'>
                <div className="flex justify-between">
                    <p className='text-3xl font-bold text-primary'>Add Latest News</p>
                    <Link to={'/admin/allNews'}> <button className="btn btn-outline hover:bg-primary hover:text-white text-slate-500 mb-2">View All News</button></Link>
                </div>
                <hr />


                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className=" md:flex md:gap-14 w-full">
                        <div >
                            <label className="text-1xl font-semibold text-slate-500 "> News Title</label>
                            <input {...register("title")} type="text" placeholder="Type here" className="input mt-2  border border-black   w-full  " />

                            {errors.title && <span className="text-red-600">this field is required</span>} <br />
                        </div>
                        <div>
                            <label className="text-1xl font-semibold text-slate-500">Photo Url</label>
                            <input  {...register("Photo", { required: true })} type="file" className="file-input  border border-black   w-full my-2" />

                            {errors.photo && <span className="text-red-600">this field is required</span>} <br />
                        </div>
                    </div>
                    <label className="text-1xl font-semibold text-slate-500">Details</label><br />
                    <textarea {...register("detail", { required: true })} placeholder="Type Here News Details " className="textarea border border-black textarea-lg md:w-5/6 " ></textarea><br />

                    {errors.details && <span className="text-red-600">this field is required</span>} <br />

                    <input disabled={loading} className="py-2 rounded-lg  text-white hover:bg-sky-600 hover:text-black bg-primary md:w-5/6 " type="submit" />
                </form>
            </div>
         
        </div>
    );
};

export default AddBanner;