import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const EStatement = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Implement the logic to download the statement here
    console.log('Downloading statement with data:', data);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg py-20">
      <h2 className="text-2xl font-bold mb-4">E-Statement</h2>
      <span className='text-lg font-semibold'>E-Statement Generation</span>
      <form onSubmit={(e) => handleSubmit(onSubmit)(e)}>
        <div className="flex flex-wrap -mx-2 my-10">
        <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-600">From Date</label>
            <Controller
              name="fromDate"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                  {...field}
                />
              )}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-600">To Date</label>
            <Controller
              name="toDate"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                  {...field}
                />
              )}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-600">Account Number</label>
            <Controller
              name="accountNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  {...field}
                />
              )}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-600">Account Name</label>
            <Controller
              name="accountName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  {...field}
                />
              )}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-gray-600">Statement Format</label>
            <Controller
              name="statementFormat"
              control={control}
              defaultValue="Excel.xlsx"
              render={({ field }) => (
                <select
                  className="w-full p-2 border rounded-md"
                  {...field}
                >
                  <option value="Excel.xlsx">Excel.xlsx</option>
                  <option value="PDF">PDF</option>
                  <option value="CSV">CSV</option>
                </select>
              )}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4 flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
            >
              Download
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EStatement;
