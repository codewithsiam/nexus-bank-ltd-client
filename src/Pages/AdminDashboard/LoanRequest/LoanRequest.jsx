import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { baseUrl } from '../../../config/server';

const LoanRequest = () => {
  const loanData = useLoaderData();

  const handleApprove = (loanId) => {
    // Send a PATCH request to approve the loan with the specified loanId
    fetch(`${baseUrl}/loans/approve/${loanId}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'Loan approved successfully') {
          // Loan was approved successfully, show a success message
          Swal.fire('Loan Approved!', 'The loan has been approved successfully.', 'success');
          // You can also update the loan status in your component's state if needed
        } else {
          // Loan approval failed or loan not found, show an error message
          Swal.fire('Loan Approval Failed', 'Unable to approve the loan. Please try again later.', 'error');
        }
      })
      .catch((error) => {
        console.error('Error approving loan:', error);
        // Handle other errors here
        Swal.fire('Error', 'An error occurred while approving the loan. Please try again later.', 'error');
      });
  };

  const handleDeny = (loanId) => {
    // Handle deny action
  };

  return (
    <div className="mb-12">
      <h2 className="text-center text-2xl font-semibold my-12 pt-10">
        Manage all pending Loans
      </h2>
      <div className="overflow-x-auto">
        <table className="table text-center w-full mx-auto">
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
                <td>{loanRequests.loanPurpose}</td>
                <td>Pending</td>
                <td className="flex flex-col gap-2 text-white">
                  <button
                    onClick={() => handleApprove(loanRequests._id)}
                    className="btn btn-ghost btn-xs bg-green-600 hover:text-black"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(loanRequests._id)}
                    className="btn btn-ghost btn-xs bg-red-600 hover:text-black"
                  >
                    Deny
                  </button>
                  <Link
                    to={`/dashboard/feedback/${loanRequests._id}`}
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
