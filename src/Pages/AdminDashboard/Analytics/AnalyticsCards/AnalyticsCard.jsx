import React from 'react';
import TotalLoan from './TotalLoan';
import TotalUsers from './TotalTransferAmount';


const AnalyticsCard = () => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">

            <TotalUsers />

            {/* total loan */}
            <TotalLoan />


            {/* total employee */}
            {/* <TotalBlogs/> */}
        </div>
    );
};

export default AnalyticsCard;