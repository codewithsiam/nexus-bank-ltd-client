import React from 'react';
import ContactAddress from './ContactAddress';
import ContactInput from './ContactInput';
import Heading from '../../../Components/Title/Heading';


const ContactUs = () => {
    return (
        <div className='pb-36 my-16'>
            <div className="container mx-auto">
                <div className='shadow p-5 py-10 rounded'>
                    <div>
                        <Heading
                        heading={"Get in touch"}
                        ></Heading>
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