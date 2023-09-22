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

    const onSubmit = (data, e) => {
        // console.log(data.Photo[0])
     setLoading(true)
        const img = data.Photo[0]

        const formData = new FormData();
        formData.append('image', img);
        fetch(imageHostingUrl, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgRes => {
            const banner_info = { 
                banner_img: imgRes.data.url,
                banner_text: data.banner_text,
                banner_btn_text: data.banner_btn_text,
                btn_link: data.btn_link
            }
            if (imgRes.success) {
                fetch(`${baseUrl}/add-banner`, {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(banner_info)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setLoading(false)
                        e.target.reset()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Banner Added Successfully.',
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
                    <p className='text-3xl font-bold text-primary'>Add Banner</p>
                </div>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-2 md:gap-5 lg:gap-14 w-full  my-5">
                        <div >
                            <label className="text-1xl font-semibold text-slate-500 "> Banner Title</label>

                            <input {...register("banner_text")} type="text" placeholder="Description" 
                            className="input mt-2  border border-black   w-full  " />
                            {errors.banner_text && <span className="text-red-600">this field is required</span>} <br />
                        </div>
                        <div>
                            <label className="text-1xl font-semibold text-slate-500">Banner Photo</label>

                            <input  {...register("Photo", { required: true })} type="file" 
                            className="file-input  border border-primary   w-full my-2" />
                            {errors.photo && <span className="text-red-600">this field is required</span>} <br />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-5 lg:gap-14 w-full mb-5">
                        <div >
                            <label className="text-1xl font-semibold text-slate-500 "> Banner Button Title</label>

                            <input {...register("banner_btn_text")} type="text" placeholder="Button title" 
                            className="input mt-2  border border-black   w-full  " />
                            {errors.banner_btn_text && <span className="text-red-600">this field is required</span>} <br />
                        </div>
                        <div >
                            <label className="text-1xl font-semibold text-slate-500 "> Button Link</label>

                            <input {...register("btn_link")} type="text" placeholder="Url link" 
                            className="input mt-2  border border-black   w-full  " />
                            {errors.btn_link && <span className="text-red-600">this field is required</span>} <br />
                        </div>
                    </div>
                    <div>
                        <button className="bg-primary border font-bold border-primary rounded text-white hover:text-primary px-5 py-1 hover:bg-white">
                            Add
                        </button>
                    </div>
                </form>
            </div>
         
        </div>
    );
};

export default AddBanner;