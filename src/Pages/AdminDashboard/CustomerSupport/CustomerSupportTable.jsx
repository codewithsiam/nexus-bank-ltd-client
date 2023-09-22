import React from 'react';
import Swal from 'sweetalert2';

const CustomerSupportTable = ({ detail, index, handleDetails ,deleteButton}) => {
  const { customerName, mobileNo, emailAddress, accountType, _id } = detail;

  

  return (
    <>
      <tr className='border border-[#ddd]'>
        <th>{index + 1}</th>
        <td>{customerName}</td>
        <td>{mobileNo}</td>
        <td>{emailAddress}</td>
        <td>{accountType}</td>
        <button
          onClick={() => handleDetails(detail)}
          className='bg-gradient-to-r from-[#004F70] to-[#007C9C] px-3 py-2 rounded text-white mt-1'
        >
          Details
        </button>
        <button
          onClick={()=>deleteButton(detail)}
          className='ml-2 mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded hover:shadow-lg hover:bg-red-600'
        >
          Delete
        </button>
      </tr>
    </>
  );
};

export default CustomerSupportTable;
