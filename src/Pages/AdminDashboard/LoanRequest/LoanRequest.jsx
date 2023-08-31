// import React from 'react';
// import { FcDebt } from "react-icons/fc";

// const LoanRequest = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default LoanRequest;
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const LoanRequest = () => {
    const loanData = useLoaderData()
    const [fullName, email, loanAmount, loanPurpose, status] = loanData;
    console.log(loanData.fullName)

    // Static data for demonstration
    const staticData = [
        // ... Your static data goes here
    ];

    const handlePending = (classStatus) => {
        // Handle pending action
    };

    const handleDeny = (classStatus) => {
        // Handle deny action
    };

    return (
        <div className="mb-12">
            <h2 className="text-center text-2xl font-semibold my-12 pt-10">
                Manage all pending Loans
            </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Loan Amount</th>
                            <th>Loan Purposes</th>
                            <th>Status</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loanData.map((loanRequests, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <h3>{loanRequests.fullName}</h3>
                                </td>
                                <td>{loanRequests.email}</td>
                                <td>
                                    <div>
                                        <div className="font-bold">$ {loanRequests.loanAmount}</div>
                                    </div>
                                </td>
                                <td>
                                    {loanRequests.loanPurpose}
                                </td>
                                <td>Pending</td>
                                <td className="flex flex-col gap-2 text-white">
                                    <button
                                        onClick={() => handlePending(loanRequests.status)}
                                        className="btn btn-ghost btn-xs bg-green-600 hover:text-black"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleDeny(loanRequests.status)}
                                        className="btn btn-ghost btn-xs bg-red-600 hover:text-black"
                                    >
                                        Deny
                                    </button>
                                    <Link
                                        to={'/dashboard/feedback'}
                                        className="w-full btn btn-sm font-bold"
                                    >
                                        Feedback
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LoanRequest;
