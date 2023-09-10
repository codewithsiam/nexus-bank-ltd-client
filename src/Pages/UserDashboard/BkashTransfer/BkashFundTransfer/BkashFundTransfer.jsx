import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const BkashFundTransfer = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data , e) => {
    e.preventDefault(e)
    console.log(data);
    // Handle the form submission logic here
  };

  return (
    <div className="bg-white rounded-lg my-20 p-8  border border-gray-300">
      <div className='flex justify-between items-center'>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Fund Transfer Form</h2>
      <img className='h-20 w-auto' src="https://markedium.com/wp-content/uploads/2018/04/Bkash-2.png" alt="" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="m-8 border border-gray-200">
        <div className=" rounded px-4 py-5">
          <h2 className="text-xl font-semibold py-4 text-green-600">Transfer From</h2>
          <hr className='text-gray-500' />
          <div className="mt-4 flex gap-4 items-center">
            <label htmlFor="fromAccountNum" className="block text-gray-700 font-semibold w-1/3">
              From Account Number :
            </label>
            <input
              type="text"
              id="fromAccountNum"
              name="fromAccountNum"
              {...register('fromAccountNum', { required: 'Account number is required' })}
              className={`w-2/3 px-3 py-2 border ${errors.fromAccountNum ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring focus:border-blue-300`}
            />
            {errors.fromAccountNum && (
              <p className="text-red-500 mt-1">{errors.fromAccountNum.message}</p>
            )}
          </div>
        </div>

        <div className="rounded px-4 py-4">
          <h2 className="text-xl font-semibold py-5 text-green-600">Transfer To</h2>
          <hr className='text-gray-500' />
          <div className="mt-4 flex gap-4 items-center">
            <label htmlFor="beneficiary" className="block text-gray-700 font-semibold w-1/3">
              Beneficiary :
            </label>
            <select
              id="beneficiary"
              name="beneficiary"
              {...register('beneficiary', { required: 'Beneficiary is required' })}
              className={`w-2/3 px-3 py-2 border ${errors.beneficiary ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring focus:border-blue-300`}
            >
              <option value="">Select Beneficiary</option>
              <option value="Option 1">Option 1</option>
              <option value="Option ">Option 2</option>
              {/* Add your options here */}
            </select>
            {errors.beneficiary && (
              <p className="text-red-500 mt-1">{errors.beneficiary.message}</p>
            )}
          </div>

          <div className="mt-4 flex gap-4 items-center">
            <label htmlFor="bkashAccountNum" className="block text-gray-700 font-semibold w-1/3">
              Bkash Account Number :
            </label>
            <input
              type="text"
              id="bkashAccountNum"
              name="bkashAccountNum"
              {...register('bkashAccountNum', { required: 'Bkash Account Number is required' })}
              className={`w-2/3 px-3 py-2 border ${errors.bkashAccountNum ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring focus:border-blue-300`}
            />
            {errors.bkashAccountNum && (
              <p className="text-red-500 mt-1">{errors.bkashAccountNum.message}</p>
            )}
          </div>
        </div>

        <div className="rounded px-4">
          <h2 className="text-xl font-semibold py-5 text-green-600">Transfer</h2>
          <hr className='text-gray-500' />
          <div className="mt-4 flex gap-4 items-center">
            <label htmlFor="transferAmount" className="block text-gray-700 font-semibold w-1/3">
              Transfer Amount :
            </label>
            <input
              type="text"
              id="transferAmount"
              name="transferAmount"
              {...register('transferAmount', { required: 'Transfer Amount is required' })}
              className={`w-2/3 px-3 py-2 border ${errors.transferAmount ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring focus:border-blue-300`}
            />
            {errors.transferAmount && (
              <p className="text-red-500 mt-1">{errors.transferAmount.message}</p>
            )}
          </div>

          <div className="mt-4 flex gap-4 items-center">
            <label htmlFor="reason" className="block text-gray-700 font-semibold w-1/3">
              Reason For Transfer :
            </label>
            <input
              type="text"
              id="reason"
              name="reason"
              {...register('reason', { required: 'Reason is required' })}
              className={`w-2/3 px-3 py-2 border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring focus:border-blue-300`}
            />
            {errors.reason && (
              <p className="text-red-500 mt-1">{errors.reason.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4 mr-16 flex justify-center space-x-4 pb-10">
          <Link to={'/dashboard/verify-pin'}>
          
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Transfer
          </button>
          </Link>
          <button
            type="button"
            className="bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BkashFundTransfer;
