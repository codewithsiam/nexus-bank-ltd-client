import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Subscribe</h1>
            <input type="text" placeholder='Enter Your Email Address' className="w-full bg-inherit border border-[#B4BEF1] p-3 outline-none rounded-xl" />
            <button className="w-full bg-[#1A4DBE] text-white mt-5 rounded-xl p-3 font-bold hover:bg-inherit hover:text-black hover: border border-[#B4BEF1] transition duration-150 ease-in-out">Subscribe</button>
            <p className="mt-5 text-[#323655]">Get the latest updates via email. Any time you may unsubscribe</p>
        </div>
    );
};

export default Subscribe;