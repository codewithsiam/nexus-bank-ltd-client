import React from 'react';

const AnalyticsTitle = ({ title, subTitle, chartTitle, chartSubTitle }) => {
    return (
        <>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className='text-[#6B7280] mb-7'>{subTitle}</p>

            <h1 className="text-xl font-bold text-white">{chartTitle}</h1>
            <p className="text-[#94A3B8] mb-5">{chartSubTitle}</p>
        </>
    );
};

export default AnalyticsTitle;