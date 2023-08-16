import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';



const ContactInput = () => {
    const [status, setStatus] = useState('');
    console.log(status)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lsmcaij', 'template_jt0rm7n', form.current, 'hArdcxICp0UE88-Dx')
            .then((result) => {
                console.log(result);
                setStatus(result.status)
                toast.success('Email Send')
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <>
            <form ref={form} onSubmit={sendEmail} className='md:basis-3/4 p-5'>
                <h2 className='text-2xl mb-3'>Get in touch</h2>

                <div className='grid grid-cols-2 gap-5 mb-5 mt-5'>
                    <input name="user_name" type="text" className="outline-none border-b w-full" placeholder='Name' required />

                    <input name="user_email" type="text" className="outline-none border-b w-full" placeholder='Email' required />
                </div>

                <input name='user_subject' type="text" className="outline-none border-b w-full" placeholder='Subject' />

                <textarea name="message" className="outline-none border-b w-full mt-5" placeholder='Message' id="" cols="10" rows="5" required></textarea>

                {/* <input type="submit" value="Send Message" className='bg-[#00ACCC] text-white px-5 py-3 mt-11 rounded' /> */}
                <button className='bg-[#00ACCC] text-white px-5 py-3 mt-11 rounded'>
                    {status === 200 ? 'Send Message Successful' : 'Send Message'}
                </button>
                <Toaster />
            </form>
        </>
    );
};

export default ContactInput;