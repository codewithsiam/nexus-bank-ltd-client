import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';

const ContactInfo = () => {
    return (
        <>
            <div className='mt-5'>
                <p className='flex gap-3 items-center'>
                    <span className='border rounded-full p-1'>
                        <MdLocationOn size={20} />
                    </span>
                    Dhaka,Bangladesh
                </p>
            </div>
            <div className='mt-2'>
                <p className='flex gap-3 items-center'>
                    <span className='border rounded-full p-1'>
                        <AiTwotonePhone size={20} />
                    </span>
                    Phone: +880 63647 6232
                </p>
            </div>
            <div className='mt-2'>
                <p className='flex gap-3 items-center'>
                    <span className='border rounded-full p-1'>
                        <BiLogoGmail size={20} />
                    </span>
                    Email: nexusbltd.gmail.com
                </p>
            </div>
        </>
    );
};

export default ContactInfo;