import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const EStatement = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Combine user input and format selection to generate a file content
    const title = 'Nexus Bank Limited';
    const subtitle = 'Your Statement Is';
    const statementData = `Account Name: ${data.accountName}\nAccount Number: ${data.accountNumber} \n From Date: ${data.fromDate}\nTo Date: ${data.toDate}`;
    const fileContent = `${title}\n${subtitle}\n\n${statementData}`;

    // Create a Blob (binary large object) with the file content
    const blob = new Blob([fileContent], { type: 'text/plain' });

    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create an <a> element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `statement.${data.statementFormat}`;

    // Trigger a click event to start the download
    a.click();

    // Clean up by revoking the Blob URL
    window.URL.revokeObjectURL(url);
  };
  return (
    <div className="p-4 bg-gray-100 rounded-lg py-10 mt-20 border border-gray-300 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-primary ml-4">E-Statement</h2>
      <div className='border border-gray-300 p-8 m-10'>
        <span className='text-lg font-semibold text-primary'>E-Statement Generation</span>
        <hr className='text-gray-400 mt-4' />
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
                    <option value="CSV">CSV</option>
                    <option value="PDF">PDF</option>
                  </select>
                )}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4 flex items-center justify-start mt-4">
              <button
                type="submit"
                className="mt-3 bg-gradient-to-r from-[#004F70] to-[#007C9C] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white"
              >
                Download
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EStatement;
