import React from 'react';

const ContactInput = () => {
    return (
        <>
            <input type="text" placeholder="Name" class="placeholder-[paragraph-two] border-[paragraph-two] border outline-none p-6 w-full rounded mb-5 mt-11 " />

            <input type="text" placeholder="Email" class="placeholder-[paragraph-two] border-[paragraph-two] border outline-none p-6 w-full rounded mb-5" />

            <textarea placeholder="Email" class="placeholder-[paragraph-two] border-[paragraph-two] border outline-none p-7 w-full rounded" name="" id="" cols="30" rows="7"></textarea>

            <button class="bg-gradient-to-r from-[#004F70] to-[#007C9C] w-full mt-5 text-white p-4 px-4 rounded-md">
                Submit
            </button>
        </>
    );
};

export default ContactInput;