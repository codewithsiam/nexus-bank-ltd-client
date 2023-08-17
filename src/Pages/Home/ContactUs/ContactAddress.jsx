import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';

const ContactAddress = () => {
    const addressInfo = [
        {
            addressTitle: 'Address',
            address: 'Habiganj Sadar, Sylhet Bangladesh',
            icon: <FaLocationArrow />,
        },
        {
            addressTitle: 'Mail us',
            address: 'nexusbltd@gmail.com',
            icon: <BiLogoGmail />,
        },
        {
            addressTitle: 'Phone',
            address: '+880 16723 324**',
            icon: <BsFillTelephoneFill />,
        }
    ]
    return (
        <>
            {
                addressInfo?.map(address =>
                    <>
                        <div className='rounded flex gap-5 p-7 border-[paragraph-two] border mt-11 mb-11 cursor-pointer icon transform transition-transform hover:bg-blue-100'>

                            <i className='text-4xl text-[#007A9A] text-gradient-to-r from-[#004F70] to-[#007C9C]'>{address.icon}</i>

                            <div>
                                <p className="text-xl text-[#16243E] mb-3">{address.addressTitle}</p>

                                <p className='text-[#67687A]'>{address.address}</p>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default ContactAddress;