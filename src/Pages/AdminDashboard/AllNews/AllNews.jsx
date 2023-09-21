import React, { useEffect, useState } from 'react';
import News from './News';
import { baseUrl } from '../../../config/server';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import moment from 'moment';


const AllNews = () => {
    const [blogNews, setBlogNews] = useState([])
    useEffect(() => {
        fetch(`${baseUrl}/getBlogs`).then(res => res.json()).then(data => {
            setBlogNews(data)
        })
    }, [blogNews])
    const handelDelete = (id) => {

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
                fetch(`${baseUrl}/deleteNews`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id })
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                    })

            }
        })


    }

    return (
        <div>
            <div className=' mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-primary'>





                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th></th>
                                <th>Title</th>
                                <th>Job</th>
                              
                                <th className='text-center'>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                blogNews?.map((news, index) => <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={news.img} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>

                                        <div className="font-bold">{news.title.slice(0, 50)}</div>


                                    </td>
                                    <td> {moment(news.date).format("MMM Do YY")}</td>
                                    <th>
                                        <div className=' flex gap-2 items-center justify-center'>
                                            <Link  to={`update/${news._id}`}
                                             className="bg-green-600 px-6 py-3 text-white font-semibold rounded"
                                            >
                                                <button>Update</button></Link>
                                            <button
                                            onClick={() => handelDelete(news._id)}
                                            className="bg-red-600 px-6 py-3 text-white font-semibold rounded">Delete</button>

                                            {/* <AiFillDelete
                                                onClick={() => handelDelete(news._id)}
                                                title='delete this news'
                                                className='w-6 h-6'>
                                            </AiFillDelete> */}
                                        </div>
                                    </th>
                                </tr>)
                            }

                        </tbody>


                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllNews;