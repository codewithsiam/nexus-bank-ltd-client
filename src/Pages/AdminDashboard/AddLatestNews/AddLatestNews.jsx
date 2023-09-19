import { useForm } from "react-hook-form"
import { baseUrl } from "../../../config/server";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";




const AddLatestNews = () => {
    const [loading, setLoading] = useState(false)
    // const secrete_key ='21d25c1a8fb6f1421dec286c6ca72204';
    const img_url = `https://api.imgbb.com/1/upload?key=21d25c1a8fb6f1421dec286c6ca72204`
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data, e) => {
        console.log(data.Photo[0])
     setLoading(true)
        const img = data.Photo[0]
        // console.log(secrete_key)


        const formData = new FormData();
        formData.append('image', img);
        fetch(img_url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(imgResponse => {
                const info = { title: data.title, detail: data.detail, img: imgResponse.data.display_url, date: new Date() }
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
                    <p className='text-3xl font-bold text-primary'>Add New Blog</p>
                    <Link to={'/admin/allNews'}> <button className="btn btn-outline hover:bg-primary hover:text-white text-slate-500 mb-2">View All Blogs</button></Link>
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

export default AddLatestNews;