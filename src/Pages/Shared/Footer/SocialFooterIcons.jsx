import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const SocialFooterIcons = () => {
    return (
        <div>
            <ul className='flex gap-5 mt-3'>
                <li className='cursor-pointer'>
                    <a href="#" className=''> <FaFacebookF className='text-2xl' /> </a>
                </li>
                <li className='cursor-pointer'>
                    <a href="#" className=''> <AiFillInstagram className='text-2xl' /> </a>
                </li>
                <li className='cursor-pointer'>
                    <a href="#" className=''> <BsLinkedin className='text-2xl' /> </a>
                </li>
                <li className='cursor-pointer'>
                    <a href="#" className=''> <BsYoutube className='text-2xl' /> </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialFooterIcons;