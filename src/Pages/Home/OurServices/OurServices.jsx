import React from 'react';
import ServicesCard from './ServicesCard';

const OurServices = () => {

    const servicesData = [
        {
            title: 'Personal Savings',
            description: 'Start saving for your future with our high-interest savings accounts.',
            icon: '💰',
        },
        {
            title: 'Mortgage Loans',
            description: 'Get your dream home with our flexible and affordable mortgage options.',
            icon: '🏠',
        },
        {
            title: 'Online Banking',
            description: 'Manage your accounts online, anytime, anywhere.',
            icon: '🌐',
        },
        {
            title: 'Investment Planning',
            description: 'Grow your wealth with expert investment strategies.',
            icon: '📈',
        },
        {
            title: 'Credit Cards',
            description: 'Access credit facilities for your daily expenses and big purchases.',
            icon: '💳',
        },
        {
            title: 'Business Financing',
            description: 'Fuel your business growth with our range of financing options.',
            icon: '🏢',
        },
    ];
    return (
        <div className="nav-btn  mt-10 rounded py-10">
            <h2 className="text-3xl text-center text-white font-bold text-blue-400 font-semibold mb-6">Our Services</h2>
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <ServicesCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;