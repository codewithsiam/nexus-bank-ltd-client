import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom'

const SocialFooterIcons = () => {
    return (
        <div>
            <ul className='flex gap-5 mt-3'>
                <li className='cursor-pointer'>
                    <Link target='_blank' to="https://www.facebook.com" className=''>
                        <FaFacebookF className='text-2xl' />
                    </Link>
                </li>
                <li className='cursor-pointer'>
                    <Link target='_blank' to="https://www.instagram.com" className=''>
                        <AiFillInstagram className='text-2xl' />
                    </Link>
                </li>
                <li className='cursor-pointer'>
                    <Link target='_blank' to="https://www.linkedin.com" className=''>
                        <BsLinkedin className='text-2xl' />
                    </Link>
                </li>
                <li className='cursor-pointer'>
                    <Link target='_blank' to="https://www.youtube.com" className=''>
                        <BsYoutube className='text-2xl' />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SocialFooterIcons;