import React from 'react';
import ServicesCard from './ServicesCard';
import Heading from '../../../Components/Title/Heading';

const OurServices = () => {

    const servicesData = [
        {
            title: 'Personal Savings',
            description: 'Start saving for your future with our high-interest savings accounts.',
            icon: 'https://html-template.spider-themes.net/banca/img/feature/icon-2.svg',
        },
        {
            title: 'Mortgage Loans',
            description: 'Get your dream home with our flexible and affordable mortgage options.',
            icon: 'https://html-template.spider-themes.net/banca/img/feature/icon-4.svg',
        },
        {
            title: 'Online Banking',
            description: 'Manage your accounts online, anytime, anywhere.',
            icon: 'https://html-template.spider-themes.net/banca/img/feature/icon-3.svg',
        },
        {
            title: 'Investment Planning',
            description: 'Grow your wealth with expert investment strategies.',
            icon: 'https://html-template.spider-themes.net/banca/img/feature/icon-1.svg',
        }
    ];
    return (
        <div className="bg-[#F7F9FA] rounded py-10">
            <div className="container mx-auto px-3">
                <div className='text-center'>
                <Heading
                    heading={"Our Services"}
                ></Heading>
                <p className="paragraph mb-11 md:w-3/6 mx-auto px-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, veniam reprehenderit cumque recusandae dolor nisi assumenda dolore voluptas ipsam </p>
            
                </div>
            </div>
            <div className="container mx-auto px-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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