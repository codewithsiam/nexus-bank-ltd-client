import React from 'react';
import Subscribe from './Subscribe';
import SocialFooterIcons from './SocialFooterIcons';

const Footer = () => {
    return (
        <footer className='relative'>

            <Subscribe />

            <div className="bg-[#F5FAFF] pt-11">
                <div className="container mx-auto pt-32 px-3">
                    <div className='grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-11'>
                        <div>
                            <h1 className="text-2xl font-bold mb-5">Nexus Bank LTD.</h1>
                            <p className='mb-5 text-[#323655]'>A modern, technology-first bank built for you and your growing business.</p>

                            {/* social icon */}
                            <SocialFooterIcons />
                        </div>

                        {/* useful links */}
                        <div>
                            <h1 className="text-2xl font-bold mb-5">Useful Links</h1>
                            <ul className='text-[#323655]'>
                                <li className='mb-2'>
                                    <a href="#">Home</a>
                                </li>
                                <li className='mb-2'>
                                    <a href="#">About Us</a>
                                </li>
                                <li className='mb-2'>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>

                        {/* company */}
                        <div>
                            <h1 className="text-2xl font-bold mb-5">Company</h1>
                            <ul className='text-[#323655]'>
                                <li className='mb-2'>
                                    <a href="#">Careers</a>
                                </li>
                                <li className='mb-2'>
                                    <a href="#">Awards</a>
                                </li>
                            </ul>
                        </div>

                        {/* support */}
                        <div>
                            <h1 className="text-2xl font-bold mb-5">Support</h1>
                            <ul className='text-[#323655]'>
                                <li className='mb-2'>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li className='mb-2'>
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* bottom */}
                    <div className='mt-11 py-5 border-y-0 text-center'>
                        <hr className='mb-11' />
                        <p className='text-[#323655]'>&copy; Copyright <span className="text-[#1A4DBE]">Nexus Bank LTD Team WEB WIZARDS</span></p>
                    </div>
                </div>
                <div></div>
            </div>
        </footer>


    );
};

export default Footer;