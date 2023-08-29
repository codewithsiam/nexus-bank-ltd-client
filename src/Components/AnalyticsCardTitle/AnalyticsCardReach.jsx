import React from 'react';
import { MdAirlineStops } from 'react-icons/md';

const AnalyticsCardReach = ({ number, targetNumber, subTitle }) => {
    return (
        <>
            <h1 className="text-4xl font-bold mt-5">{number}</h1>
            <div>
                <MdAirlineStops className='text-red-600' size={20} />
                <p className="text-sm text-[#94A3B8]">
                    <span className='text-red-500'>{targetNumber} </span>
                    {subTitle}
                </p>
            </div>
        </>
    );
};

export default AnalyticsCardReach;