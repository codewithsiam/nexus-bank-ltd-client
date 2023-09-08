import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const PaymentPinVerification = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle the form submission logic here
  };

  return (
    <div className="py-20">
      <div className="max-w-full mx-auto bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Payment Verification</h2>
        <p className="text-gray-600 mb-4">Please OTP/a verification code (M-PIN) has been sent to your mobile (017 ******12) to proceed your "Credit Card Bill payment " , Please verify By entering the OTP/M-PIN Below.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className='flex items-center gap-4'>
            <label htmlFor="pin" className="block text-gray-700 font-semibold">
              PIN :
            </label>
            <input
              type="password"
              id="pin"
              name="pin"
              placeholder='Please enter your PIN to verify your payment.'
              {...register('pin', { required: 'PIN is required' })}
              className={`w-2/3 px-3 py-2 border ${errors.pin ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring focus:border-blue-300`}
            />
            {errors.pin && (
              <p className="text-red-500 mt-1">{errors.pin.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <Link to={'/dashboard/bkash-fund-transfer'}>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Verify
            </button>
            
            </Link>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Resend
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPinVerification;
