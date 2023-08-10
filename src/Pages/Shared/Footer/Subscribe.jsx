import React from 'react';
import emailSend from '../../../assets/images/Footer/emailSent.png'

const Subscribe = () => {
    return (
        <section className='absolute w-full -top-32 px-3'>
            <div className="container mx-auto bg-gradient-to-r from-[#1A4DBE] to-[#1A4DBE] rounded-lg ">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-5">
                    <div className='text-white p-5 py-11'>
                        <h1 className="text-4xl font-bold mb-5">Subscribe</h1>
                        <p className="mt-5 mb-5">Get the latest updates via email. Any time you may unsubscribe</p>
                        <input type="text" placeholder='Enter your Email' className="outline-none placeholder-black w-full p-3 rounded-xl text-black text-bold" />
                        <button className="bg-[#00C2FF] mt-5 px-11 border font-xl py-3 rounded-xl text-black hover:bg-inherit hover:border transition duration-150 ease-in-out hover:text-white">Subscribe</button>
                    </div>
                    <div className='hidden md:block'>
                        <img src={emailSend} className="w-50 w-[339px] float-right" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;