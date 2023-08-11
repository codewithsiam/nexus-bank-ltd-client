import React from 'react';

const ServicesCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white p-6  text-black rounded-lg shadow-md hover:shadow-lg transform transition duration-100 hover:-translate-y-3">
            <div className="text-2xl mb-4">{icon}</div>
            <h3 className="text-xl  font-semibold font-semibold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ServicesCard;