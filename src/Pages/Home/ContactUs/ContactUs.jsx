import React from 'react';
import ContactInfo from './ContactInfo';
import ContactInput from './ContactInput';


const ContactUs = () => {
    return (
        <div className='bg-[#F7F9FA] py-11'>
            <div className="container mx-auto px-3">
                <h1 className="text-center text-4xl font-extrabold mb-5">Contact Us</h1>
                <div className='bg-white shadow'>
                    <div className='flex gap-5'>
                        <div className='bg-[#00ACCC] text-white basis-2/4 p-5 md:block hidden'>

                            <h2 className='text-2xl mb-3'>Let's get in touch</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia. Vitae omnis fuga deleniti fugiat culpa velit odit veritatis earum.</p>

                            <ContactInfo/>
                        </div>

                        <ContactInput/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;