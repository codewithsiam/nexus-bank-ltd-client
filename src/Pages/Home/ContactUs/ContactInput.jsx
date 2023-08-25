import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactInput = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xa6v52i', 'template_8a3n7um', form.current, 'hArdcxICp0UE88-Dx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <form ref={form} onSubmit={sendEmail}>
            <input name="user_name" type="text" placeholder="Name" className="placeholder-[paragraph-two] border-[paragraph-two] border outline-none p-6 w-full rounded mb-5 mt-11 " />

            <input name="user_email" type="text" placeholder="Email" className="placeholder-[paragraph-two] border-[paragraph-two] border outline-none p-6 w-full rounded mb-5" />

            <textarea name="message" placeholder="Message" className="placeholder-[paragraph-two] border-[paragraph-two] border outline-none p-7 w-full rounded" id="" cols="30" rows="7"></textarea>

            <button className="bg-gradient-to-r from-[#004F70] to-[#007C9C] w-full mt-5 text-white p-4 px-4 rounded-md">
                Submit
            </button>
        </form>
    );
};

export default ContactInput;