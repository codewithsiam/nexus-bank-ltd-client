import React from 'react';
import ContactAddress from './ContactAddress';
import ContactInput from './ContactInput';


const ContactUs = () => {
    return (
        <div className='py-11'>
            <div className="container mx-auto">
                <div className='shadow p-5 py-24 rounded'>
                    <div>
                        <h1 className="text-5xl text-[#16243E] font-bold">Get in touch</h1>
                        <p className='paragraph-two'>We are here for you! how can we help, We are here for you!</p>
                        <div className='flex flex-col md:flex-row gap-5'>

                            <div className='md:w-3/5 mb-5 md:mb-0'>
                                <ContactInput />
                            </div>

                            <div className='md:w-2/4'>
                                <ContactAddress />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;