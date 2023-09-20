import React from 'react';
import Subscribe from './Subscribe';
import SocialFooterIcons from './SocialFooterIcons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='relative mt-[7rem]'>
            <Subscribe />
            <div className="bg-[#0F1123] pt-11 text-white">
                <div className="container mx-auto pt-32 px-3">
                    <div className='grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-11'>
                        <div>
                            <img className="w-28 mb-5" src='https://i.ibb.co/GsDWGkj/logo.png' alt="" />
                            <p className='mb-5'>A modern, technology-first bank built for you and your growing business.</p>

                            {/* social icon */}
                            <SocialFooterIcons />
                        </div>

                        {/* useful links */}
                        <div>
                            <h1 className="text-2xl font-bold mb-5">Useful Links</h1>
                            <ul className=''>
                                <li className='mb-2'>
                                    <Link  target='blank' to="/">Home</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link  target='blank' to="/about-details">About Us</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link  target='blank' to="/nexus-accounts">Services</Link>
                                </li>
                                <li>
                                    <Link  target='blank' to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        {/* company */}
                        <div>
                            <h1 className="text-2xl font-bold mb-5">Company</h1>
                            <ul className=''>
                                <li className='mb-2'>
                                    <Link  target='blank' to="/careers">Careers</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link  target='blank' to="/blogs">Blogs</Link>
                                </li>
                            </ul>
                        </div>

                        {/* support */}
                        <div>
                            <h1 className="text-2xl font-bold mb-5">Support</h1>
                            <ul className=''>
                                <li className='mb-2'>
                                    <Link  target='blank' to="/nexus-customer-service-portal">Customer Support Portal</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link  target='blank' to="/">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* bottom */}
                    <div className='mt-11 py-5 border-y-0 text-center'>
                        <hr className='mb-11' />
                        <p className=''>&copy; Copyright <span>Nexus Bank LTD - Team WEB WIZARDS</span></p>
                    </div>
                </div>
                <div></div>
            </div>
        </footer>

    );
};

export default Footer;