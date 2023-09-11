import React from 'react';

const AnalyticsCardTitle = ({cardTitle}) => {
    return (
        <>
            <h4 className="text-base font-bold">{cardTitle}</h4>
            {/* <p className="text-sm bg-[#EBEBEB] px-3 rounded-full cursor-pointer">{cardDays}</p> */}
        </>
    );
};

export default AnalyticsCardTitle;