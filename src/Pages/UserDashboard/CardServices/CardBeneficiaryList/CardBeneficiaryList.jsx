import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../../../config/server';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';


const CardBeneficiaryList = () => {
    const { user } = useContext(AuthContext)
    const [cardBeneficiary, setCardBeneficiary] = useState([])
    useEffect(() => {
        fetch(`${baseUrl}/CardBeneficiary?useName=${user?.username}`)
            .then(res => res.json())
            .then(data => setCardBeneficiary(data))
    }, [cardBeneficiary])
    const handelDelete = (id) => {
        fetch(`${baseUrl}/deleteBeneficiary/${id}?username=${user.username}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    return (
        <div className='mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-primary'>
            <div className='p-4'>
                <h1 className='text-3xl font-bold text-primary'>Credit Card Bill Payment Beneficiary List </h1>
                <div className='bg-slate-100 p-2 rounded-lg'>
                    <p><Link to={'add-card-beneficiary'} className='text-primary '>Click Here</Link> To Add Beneficiary Credit Card </p>

                </div>
                <div className='bg-slate-100 p-2 rounded-lg mt-4 divide-y-2 divide-solid'>
                    <p className='text-lg font-bold text-primary'>NBL Cards</p>
                    <p className='text-center mt-4'>Total number of Beneficiary : {cardBeneficiary.length}</p>
                    <div className=''>
                        <div className="overflow-x-auto ">
                            <table className="table table-zebra border border-primary">
                                {/* head */}
                                <thead className='bg-primary text-white font-bold'>
                                    <tr>
                                        <th>Nick Name</th>
                                        <th>Beneficiary</th>
                                        <th>Beneficiary Contact</th>
                                        <th>DELETE</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {/* row 1 */}
                                    {
                                        cardBeneficiary.map((beneficiary, index) => <tr key={index}>
                                            <td >{beneficiary.name}</td>
                                            <td>{beneficiary.account_number} </td>
                                            <td>{beneficiary.phone}<br />{beneficiary.email}</td>
                                            <td onClick={() => handelDelete(beneficiary.id)}><button className='cursor-pointer hover:bg-slate-400 p-2 rounded-full '><AiFillDelete className='  h-6 w-6' ></AiFillDelete></button></td>
                                        </tr>)
                                    }
                                    {/* row 2 */}
                                    {/* <tr>
                                        <td>Prince</td>
                                        <td>456664676xxxxx554 <br />Rukshana Akter</td>
                                        <td>014742555447 <br />rupu@gmail.com</td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-100 p-2 rounded-lg mt-4'>
                    <p className='text-lg font-bold text-primary'>Other Bank Card</p>

                </div>
            </div>
        </div>
    );
};

export default CardBeneficiaryList;