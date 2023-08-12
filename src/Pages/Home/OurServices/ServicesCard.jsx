import React from 'react';

const ServicesCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white p-6  text-black rounded-lg shadow-md hover:shadow-lg transform transition duration-100 hover:-translate-y-3 text-center">
            <div className="text-2xl mb-4">
                <img className='mx-auto' src={icon} alt="" />
            </div>
            <h3 className="text-2xl font-semibold heading mb-2">{title}</h3>
            <p className='paragraph'>{description}</p>
        </div>
    );
};

export default ServicesCard;