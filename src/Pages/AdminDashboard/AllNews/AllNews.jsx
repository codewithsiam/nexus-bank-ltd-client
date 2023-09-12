import React, { useEffect, useState } from 'react';
import News from './News';
import { baseUrl } from '../../../config/server';
import Swal from 'sweetalert2';


const AllNews = () => {
    const [blogNews,setBlogNews]=useState([])
    useEffect(()=>{
        fetch(`${baseUrl}/getBlogs`).then(res=>res.json()).then(data=>{
            setBlogNews(data)
        })
    },[blogNews])
    const handelDelete=(id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${baseUrl}/deleteNews`,{
                    method:'DELETE',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({id})
                })
                .then(res=>res.json())
                .then(data=>{
                console.log(data)
                if(data.deletedCount){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    const newData=blogNews?.find(news=>news._id!==id)
                    setBlogNews(newData)
                }
                })
             
            }
          })
        console.log(id)
        
    }
    return (
        <div>
             <div className=' mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-primary'>
             <div className="grid md:grid-cols-3 gap-5 mx-4">
                    {
                        blogNews?.map((news,index) => <News
                        key={index}
                        handelDelete={handelDelete}
                            news={news}
                        />)
                    }
                </div>
        </div>
        </div>
    );
};

export default AllNews;