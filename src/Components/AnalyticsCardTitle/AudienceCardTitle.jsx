import React from 'react';
import { GoDotFill } from 'react-icons/go';

const AudienceCardTitle = ({ newTitle, newNumber}) => {
    return (
        <>
            <GoDotFill className='text-[#3182CE]' />
            <h5 className="text-sm">{newTitle}</h5>
            <h5 className="text-sm">{newNumber}</h5>
            {/* <h5 className="text-sm text-[#6B7280]">{newPercent}</h5> */}
        </>
    );
};

export default AudienceCardTitle;