import React from 'react';

const Statement = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-9 mt-11'>
            <div className='bg-white p-7 rounded-2xl'>
                <h1 className='text-lg'>Receive Money</h1>
                <p className="text-[#60A086] text-sm">
                    Paid on February 6, 2022
                </p>

                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <div>
                        <p className='text-sm text-[#6F7A83]'>Maximum</p>
                        <h1 className="text-2xl">
                            50,000.00 BDT
                        </h1>
                    </div>
                    <div>
                        <p className='text-sm text-[#6F7A83]'>Total</p>
                        <h1 className="text-2xl">
                            2,000.00 BDT
                        </h1>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='text-sm text-[#6F7A83]'>Minimum</p>
                    <h1 className="text-2xl">
                        500.00 BDT
                    </h1>
                </div>
            </div>

            <div className='bg-white p-7 rounded-2xl'>
                <h1 className='text-lg'>Money Transfered</h1>
                <p className="text-[#EA4135] text-sm">
                    Paid on February 6, 2022
                </p>

                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <div>
                        <p className='text-sm text-[#6F7A83]'>Maximum</p>
                        <h1 className="text-2xl">
                            50,000.00 BDT
                        </h1>
                    </div>
                    <div>
                        <p className='text-sm text-[#6F7A83]'>Total</p>
                        <h1 className="text-2xl">
                            2,000.00 BDT
                        </h1>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='text-sm text-[#6F7A83]'>Minimum</p>
                    <h1 className="text-2xl">
                        500.00 BDT
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Statement;