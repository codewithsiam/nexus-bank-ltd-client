import React, { useEffect, useState, useRef } from 'react';
import CustomerSupportTable from './CustomerSupportTable';
import axios from 'axios'
import { baseUrl } from '../../../config/server';
import Swal from 'sweetalert2';
import {
    QueryClient,
    useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const CustomerSupport = () => {

    const [details, setDetails] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isClose, setIsClose] = useState(true);
    const [support, setSupport] = useState({});
    const [isDelete, setIsDelete] = useState(false);
    const [selectedCount, setSelectedCount] = useState(0);

    const form = useRef();
    const notify = () => toast.success('Email Sent Successful');

    const sendEmail = (e) => {
        e.preventDefault();
    
        const message = form.current['message'].value;
    
        if (!message) {
            alert('Please write something');
            return;
        }
    
        emailjs.sendForm('service_xa6v52i', 'template_8a3n7um', form.current, 'hArdcxICp0UE88-Dx')
            .then((result) => {
                if (result.text === 'OK') {
                    notify();
                } else {
                    console.error('Email not sent. EmailJS response:', result);
                    alert('Email not sent. Please check the console for details.');
                }
            })
            .catch((error) => {
                console.error('Email sending error:', error);
                alert('Email sending error. Please check the console for details.');
            });
    };
    



    const handleClose = () => {
        document.getElementById('modal-id').classList.remove('fadeIn');
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    }

    const { data: selected = [], refetch } = useQuery(['selected'], async () => {
        const res = await fetch(`${baseUrl}/support-customers`)
        const selectedData = await res.json();
        setSelectedCount(selectedData.length); // Update selectedCount when the data changes
        return selectedData;
    })

    useEffect(() => {
        fetch(`${baseUrl}/support-customers`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    const deleteButton = (detail) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${baseUrl}/customer/${detail?._id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(detail),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            // Update the state to remove the deleted item
                            setDetails((prevDetails) => prevDetails.filter((item) => item._id !== detail._id));

                            // Call refetch() after the delete operation is successful
                            queryClient.invalidateQueries(['selected']);
                            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                        }
                    });
            }
        });
    };

    const handleDetails = (detail) => {
        // console.log(detail)
        setIsOpen(!isOpen)
        fetch(`${baseUrl}/customer/${detail?._id}`)
            .then(res => res.json())
            .then(data => {
                setSupport(data)
            })
    }






    return (
        <div className='mt-11'>
            <h1 className="text-2xl font-bold text-center mb-11">Customer Support Request : {details.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-gradient-to-r from-[#004F70] to-[#007C9C] text-white'>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.length > 0 ?

                                details.map((detail, index) => <CustomerSupportTable
                                    key={detail._id}
                                    detail={detail}
                                    index={index}
                                    handleDetails={handleDetails}
                                    deleteButton={deleteButton}
                                />)
                                :
                                <h1 className='text-3xl font-bold text-center mx-auto'>No Request</h1>
                        }
                    </tbody>
                </table>

                {/* details modal */}
                {
                    isOpen && <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
                        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                            <div className="">
                                <div className="text-center p-5 flex-auto justify-center">
                                    <h2 className="text-xl font-bold py-4 ">Name: {support?.customerName}</h2>
                                    <p className="text-sm text-gray-500 px-8">Email: {support?.emailAddress}</p>
                                    <p className="text-sm text-gray-500 px-8">Mobile No: {support?.mobileNo}</p>
                                    <p className="text-sm text-gray-500 px-8">Account Type: {support?.accountType}</p>
                                    <p className="text-sm text-gray-500 px-8">Details: {support?.details}</p>
                                </div>

                                <form ref={form} onSubmit={sendEmail}>
                                    <p className="text-sm text-gray-500">Replay</p>
                                    <textarea className='border outline-none w-full' name="message" id="" cols="5" rows="5"></textarea>
                                    <button className="bg-gradient-to-r from-[#004F70] to-[#007C9C] px-3 py-2 rounded text-white mt-1">Send</button>
                                </form>


                                <div className="p-3  mt-2 text-center space-x-4 md:block">
                                    <button onClick={handleClose} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default CustomerSupport;
