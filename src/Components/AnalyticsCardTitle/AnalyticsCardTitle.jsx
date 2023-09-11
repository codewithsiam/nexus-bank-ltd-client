import React from 'react';

const AnalyticsCardTitle = ({cardTitle, total}) => {
    return (
        <div className=''>
            <h4 className="text-base font-bold block">{cardTitle}</h4>
            <p className="text-4xl font-bold text-center mt-3 text-[#489795]">{total}</p>
        </div>
    );
};

export default AnalyticsCardTitle;